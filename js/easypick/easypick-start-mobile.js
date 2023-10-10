var simplii_url = document.location.protocol + '//' + document.location.host;
const date_options_mobile = { day: '2-digit', month: '2-digit', year: 'numeric' };

var sidewidth = jQuery(window).width();
var number_of_calenders = 2;
var number_of_grid = 2;
if (sidewidth > 799 && sidewidth < 1000) {
    var number_of_calenders = 2;
    var number_of_grid = 6;
}
else if (sidewidth > 1001 && sidewidth < 1081) {
    var number_of_calenders = 2;
    var number_of_grid = 2;
}
const picker = new easepick.create({
    element: "#start_datepicker-mobile",
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
            let endDate = picker.getEndDate('DD.MM.YYYY');
            var startdate_formated = new Date(startDate);
            var enddate_formated = new Date(endDate);

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
          
            jQuery('#header-form-submit-btn').removeClass('disabled_form_btn');
            jQuery('#header-form-submit-btn').removeAttr('disabled');
            picker.clear();

        });
    }
})

/*

const picker_mobile = new easepick.create({
    element: "#start_datepicker_mobile",
    css: [
        simplii_url + '/wp-content/plugins/simplii/css/lightpick.css',
        simplii_url + '/wp-content/plugins/simplii/css/lightpick_individual_start.css',
    ],
    lang: "de-DE",
    format: "DD.MM.YYYY",
    zIndex: 10,
    grid: 1,
    calendars:4,
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
            let startDate = picker_mobile.getStartDate('DD.MM.YYYY');
            let endDate = picker_mobile.getEndDate('DD.MM.YYYY');
            var startdate_formated = new Date(startDate);
            var enddate_formated = new Date(endDate);

            jQuery('#field-start-date').val(startdate_formated.toLocaleDateString('de-DE', date_options_mobile));
            jQuery('#field-end-date').val(enddate_formated.toLocaleDateString('de-DE', date_options_mobile));
            jQuery('.label-startdatum').html(startdate_formated.toLocaleDateString('de-DE', date_options_mobile));
            jQuery('.label-enddatum').html(enddate_formated.toLocaleDateString('de-DE', date_options_mobile));


            jQuery('#full-startform').hide('slow');
          
            jQuery('#header-form-submit-btn').removeClass('disabled_form_btn');
            jQuery('#header-form-submit-btn').removeAttr('disabled');
            picker.clear();

        });
    }



})

*/

