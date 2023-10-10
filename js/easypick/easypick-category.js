var simplii_url = document.location.protocol + '//' + document.location.host;
const date_options = { day: '2-digit', month: '2-digit', year: 'numeric' };

var sidewidth = jQuery(window).width();
var number_of_calenders = 3;
var number_of_grid = 3;
var category_startDate = '';
var category_endDate = '';
if (sidewidth > 799 && sidewidth < 1000) {
    var number_of_calenders = 2;
    var number_of_grid = 6;
}
else if (sidewidth > 1001 && sidewidth < 1081) {
    var number_of_calenders = 2;
    var number_of_grid = 2;
}

var number_of_calenders = 3;
var number_of_grid = 3;
var category_startDate = jQuery('#categoryStartDate').val();
var category_endDate = jQuery('#categoryEndDate').val();


if (jQuery('#start_datepicker').hasClass('is-category')) {
    if (jQuery('#categoryStartDate').val().length && jQuery('#categoryStartDate').length) {
        var category_startDate = jQuery('#categoryStartDate').val();
    }

    if (jQuery('#categoryEndDate').length && jQuery('#categoryEndDate').val().length) {
        var category_endDate = jQuery('#categoryEndDate').val();
    }
}

const picker = new easepick.create({
    element: "#category_datepicker",
    css: [
        simplii_url + '/wp-content/plugins/simplii/css/lightpick.css',
        simplii_url + '/wp-content/plugins/simplii/css/lightpick_individual_start.css',
    ],
    lang: "de-DE",
    format: "DD.MM.YYYY",
    zIndex: 10,
    grid: number_of_grid,
    calendars: number_of_calenders,
    inline: true,
    locale: {
        apply: "Zeitraum wählen",
        cancel: "Zurücksetzen"
    },
    plugins: [
        "AmpPlugin",
        "RangePlugin",
        "LockPlugin"
    ],
    AmpPlugin: {
        resetButton: false,
        darkMode: false
    },
    RangePlugin: {
        tooltipNumber(num) {
            return num;
        },
        locale: {
            one: 'Tag',
            other: 'Tage',
        },
        startDate: new Date(category_startDate),
        endDate: new Date(category_endDate)
    },
    LockPlugin: {
        minDate: new Date(),
        minDays: 2,
        maxDays: 730,
        inseparable: false,


    },
    autoApply: false,
    setup(picker) {

        picker.on('select', (e) => {
            let startDate = picker.getStartDate('DD.MM.YYYY');
            let startDateCategory = picker.getStartDate('DD_MM_YYYY');
            let endDate = picker.getEndDate('DD.MM.YYYY');
            let endDateCategory = picker.getEndDate('DD_MM_YYYY');
            var startdate_formated = new Date(startDate);
            var enddate_formated = new Date(endDate);


                jQuery('.category-date').html(startdate_formated.toLocaleDateString('de-DE', date_options) + ' - ' + enddate_formated.toLocaleDateString('de-DE', date_options));
                new_category_links(startDateCategory, endDateCategory);
                hideLCatwegoryLayer();
 /*
                jQuery('#field-start-date').val(startdate_formated.toLocaleDateString('de-DE', date_options));
                jQuery('#field-end-date').val(enddate_formated.toLocaleDateString('de-DE', date_options));
                jQuery('.label-startdatum').html(startdate_formated.toLocaleDateString('de-DE', date_options));
                jQuery('.label-enddatum').html(enddate_formated.toLocaleDateString('de-DE', date_options));
                jQuery('.startform_layer').hide();
                jQuery('#startform-container').addClass('with-shadow');
                jQuery('body').removeClass('no-scrolling-effect');
                jQuery('#ce-start-book-form-main-container').removeClass('big-index');
                jQuery('#ce-start-book-form-main-container').addClass('small-index');
                jQuery('#desktop-calendar-layer').hide();
                jQuery('#startform-container-inner').removeClass('no-display');

                jQuery('#header-form-submit-btn').removeClass('disabled_form_btn');
                jQuery('#header-form-submit-btn').removeAttr('disabled');
                picker.clear();
            */

        });

    }



})

const picker_mobile = new easepick.create({
    element: "#start_datepicker-mobile",
    css: [
        simplii_url + '/wp-content/plugins/simplii/css/lightpick.css',
        simplii_url + '/wp-content/plugins/simplii/css/lightpick_individual_start.css',
    ],
    lang: "de-DE",
    format: "DD.MM.YYYY",
    zIndex: 10,
    grid: 1,
    calendars: 12,
    inline: true,
    locale: {
        apply: "Zeitraum wählen",
        cancel: "Zurücksetzen"
    },
    plugins: [
        "AmpPlugin",
        "RangePlugin",
        "LockPlugin"
    ],
    AmpPlugin: {
        resetButton: false,
        darkMode: false
    },
    RangePlugin: {
        tooltipNumber(num) {
            return num;
        },
        locale: {
            one: 'Tag',
            other: 'Tage',
        },
        startDate: new Date(category_startDate),
        endDate: new Date(category_endDate)
    },
    LockPlugin: {
        minDate: new Date(),
        minDays: 2,
        maxDays: 730,
        inseparable: false,


    },
    autoApply: true,
    setup(picker) {
        picker.on('select', (e) => {

            let startDate = picker_mobile.getStartDate('DD.MM.YYYY');
            let endDate = picker_mobile.getEndDate('DD.MM.YYYY');
            var startdate_formated = new Date(startDate);
            var enddate_formated = new Date(endDate);
            let startDateCategory = picker.getStartDate('DD_MM_YYYY');
            let endDateCategory = picker.getEndDate('DD_MM_YYYY');
            jQuery('.category-date').html(startdate_formated.toLocaleDateString('de-DE', date_options) + ' - ' + enddate_formated.toLocaleDateString('de-DE', date_options));
            jQuery('.mobile-start-calendar-footer-hidden').removeClass('mobile-start-calendar-footer-hidden');
            new_category_links(startDateCategory, endDateCategory);





        });

        picker.on('render', (e) => {

            jQuery('footer').css('position', 'fixed');

        });
    }
})


function open_category_datepicker() {
    jQuery(this).on('click', function () {
        jQuery('.category-datepicker-layer').show();
    })
}

function new_category_links(startDate, endDate) {

    the_start_date = startDate.toLocaleDateString('es-CL', date_options);
    the_end_date = endDate.toLocaleDateString('es-CL', date_options);

    jQuery('.detail_link').each(function (e) {
        var request_id = jQuery(this).attr('request_id');
        var org_link = jQuery(this).attr('org_link');
        var new_link = org_link + '?request_id=' + request_id + '&start=' + the_start_date + '&end=' + the_end_date;
        jQuery(this).attr('href', new_link);
    })

}

function hideLCatwegoryLayer() {
    jQuery('#testcontainer').toggle();
}

jQuery(document).ready(function ($) {
    $('.category-change-date').on('click', function () {
        $('.category-datepicker-layer').show();
    })

    $('.category-change-date-mobile').on('click', function () {
        $('#mobile-start-calendar').show();
    })

    $('.category-mobile-date-change').on('click', function() {
        $('#mobile-start-calendar').hide();
    })


})


