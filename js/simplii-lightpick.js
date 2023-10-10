
var simplii_url = document.location.protocol + '//' + document.location.host;
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

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
        getRequestCalendar(carDates);

    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {

    }
});


function getRequestCalendar(carDates) {
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
        element: document.getElementById('datepicker'),
        css: [
            simplii_url + '/wp-content/plugins/simplii/css/lightpick.css',
            simplii_url + '/wp-content/plugins/simplii/css/lightpick_individual_start.css',
        ],
        plugins: ['RangePlugin', 'LockPlugin'],
        RangePlugin: {
            tooltipNumber(num) {
                return num - 1;
            },
            locale: {
                one: 'Tag',
                other: 'Tage',
            },
        },
        lang: "de-DE",
        grid: 2,
        calendars: 2,
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
        setup(picker) {
            picker.on('select', (e) => {
                const startDateFull = picker.getStartDate();
                const endDateFull = picker.getEndDate();
                jQuery('#request_start_date').val(startDateFull.format("DD.MM.YYYY"));
                jQuery('#request_end_date').val(endDateFull.format("DD.MM.YYYY"));

            });
        },


    });
}



