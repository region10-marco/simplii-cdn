
var simplii_url = document.location.protocol + '//' + document.location.host;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
var doc_width = jQuery(window).width();

var number_of_calendars = 3;
var number_of_grid = 3;
var trigger = '#detail-datepicker-mobile';
var show_type = false;
var picker_type = 'desktop';
if (doc_width > 900) {
    number_of_calendars = 3;
    number_of_grid = 3;

} else if (doc_width > 640) {
    number_of_calendars = 2;
    number_of_grid = 2;
} else {
    number_of_calendars = 12;
    number_of_grid = 1;
    trigger = '#detail-datepicker-mobile';
    show_type = true;
    picker_type = 'mobile';
}

if (jQuery('#request_start_date_calendar').val().length && jQuery('#request_start_date_calendar').length) {
    var category_startDate = jQuery('#request_start_date_calendar').val();
}

if (jQuery('#request_end_date_calendar').length && jQuery('#request_end_date_calendar').val().length) {
    var category_endDate = jQuery('#request_end_date_calendar').val();
}





jQuery.ajax({
    type: 'POST',
    url: simplii_ajax.ajaxurl,
    dataType: "json",
    data: {
        action: 'simplii_get_booked_days',
        request_id: urlParams.get('request_id')
    },
    success: function (response, textStatus, XMLHttpRequest) {
        requestDates = [response['data']['startdate'], response['data']['enddate']];

        const carDates = [];
        for (let i = 0; i < response.data.length; i++) {
            carDates.push(response.data[i]);
        }



        getRequestCalendar(carDates, trigger, show_type);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {

    }
});


function getRequestCalendar(carDates, trigger, show_type) {

    const DateTime = easepick.DateTime;
    const bookedDates = carDates.map(d => {
        if (d instanceof Array) {
            const start = new DateTime(d[0], 'DD.MM.YYYY');
            const end = new DateTime(d[1], 'DD.MM.YYYY');

            return [start, end];
        }

        return new DateTime(d, 'DD.MM.YYYY');
    });



    const picker = new easepick.create({
        element: document.querySelector(trigger),
        css: [
            simplii_url + '/wp-content/plugins/simplii/css/lightpick.css',
            simplii_url + '/wp-content/plugins/simplii/css/lightpick_individual.css',
        ],
        format: "DD.MM.YYYY",
        plugins: ['RangePlugin', 'LockPlugin'],
        RangePlugin: {
            tooltipNumber(num) {
                return num - 1;
            },
            locale: {
                one: 'Tag',
                other: 'Tage',
            },
            startDate: new Date(category_startDate),
            endDate: new Date(category_endDate)
        },
        lang: "de-DE",
        grid: number_of_grid,
        calendars: number_of_calendars,
        inline: true,
        LockPlugin: {
            minDate: new Date(),
            minDays: 1,
            maxDays: 730,
            inseparable: true,

            filter(date, picked) {
                if (picked.length === 1) {
                    const incl = date.isBefore(picked[0]) ? '[)' : '(]';
                    return !picked[0].isSame(date, 'day') && date.inArray(bookedDates, incl);

                }
                return date.inArray(bookedDates, '[)');
            },
        },
        autoApply: true,
        setup(picker) {
            picker.on('select', (e) => {
                const startDateFull = picker.getStartDate();
                const endDateFull = picker.getEndDate();
                jQuery('#simplii_detail_desktop_calendar_layer').hide();
                jQuery('body').removeClass('no-scrolling-effect');
                jQuery('#request_start_date').val(startDateFull.format("DD.MM.YYYY"));
                jQuery('#request_end_date').val(endDateFull.format("DD.MM.YYYY"));
                jQuery('#mobile-detail-calendar').hide();
                jQuery('.detail-datepicker').removeClass('datepicker_has_error');
                jQuery('.detail-datepicker-mobile-selector').removeClass('datepicker_has_error');

                if (picker_type == 'desktop') {
                    jQuery('.detail-datepicker').val(startDateFull.format("DD.MM.YYYY") + ' - ' + endDateFull.format("DD.MM.YYYY"));
                }

                if (picker_type == 'mobile') {
                    jQuery('#datepicker-mobile-selctor').val(startDateFull.format("DD.MM.YYYY") + ' - ' + endDateFull.format("DD.MM.YYYY"));
                    jQuery('body').removeClass('no-scrolling-effect');

                    jQuery('#mobile-detail-calendar').hide();

                }
                picker.clear();

            });
            picker.on('show', (e) => {

                if (picker_type == 'desktop') {
                    jQuery('#simplii_detail_desktop_calendar_layer').show();
                    jQuery('body').addClass('no-scrolling-effect');
                }

            });
        },


    });
}



jQuery("#detail_calendar_form").submit(function (e) {
    e.preventDefault();
    var startdate = jQuery('#request_start_date').val();
    var enddate = jQuery('#request_end_date').val();
    if (startdate.length == 0 || enddate.length == 0) {
        jQuery('#datepicker').attr('placeholder', 'Wähle einen Zeitraum!');
        jQuery('#datepicker-mobile-selctor').addClass('datepicker_has_error');
    } else {
        e.currentTarget.submit();
    }
});

