jQuery(document).ready(function ($) {


    jQuery(function () {

        $('.single-datepicker-date').daterangepicker({
            autoUpdateInput: false,
            minDate: new Date(),
            timePicker: true,
            timePicker24Hour: true,
            timePickerIncrement: 30,
            isInvalidDate: function (ele) {
                var currDate = moment(ele._d).format('DD.MM.YYYY');
                //return ["15.07.2023"].indexOf(currDate) != -1;
            },
            "locale": {
                "format": "DD.MM.YYYY HH:mm ",
                "separator": " - ",
                "applyLabel": "Zeitraum wählen",
                "cancelLabel": "Cancel",
                "fromLabel": "Vom",
                "toLabel": "Bis",
                "customRangeLabel": "Custom",
                "weekLabel": "W",
                "daysOfWeek": [
                    "So",
                    "Mo",
                    "Di",
                    "Mi",
                    "Do",
                    "Fr",
                    "Sa"
                ],
                "monthNames": [
                    "Januar",
                    "Februar",
                    "März",
                    "April",
                    "Mai",
                    "Juni",
                    "Juli",
                    "August",
                    "September",
                    "Oktober",
                    "November",
                    "Dezember"
                ],
                "firstDay": 1
            },
            "alwaysShowCalendars": true,
            "opens": "center",
            "drops": "down",
            "parentEl": $(this).parent(),
        });

        $('.single-datepicker-date').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('DD.MM.YYYY HH:mm ') + ' - ' + picker.endDate.format('DD.MM.YYYY HH:mm '));

            $('.simplii_start_date').val(picker.startDate.format('DD.MM.YYYY'));
            $('.simplii_start_time').val(picker.startDate.format('HH:mm'));
            $('.simplii_end_date').val(picker.endDate.format('DD.MM.YYYY'));
            $('.simplii_end_time').val(picker.endDate.format('HH:mm'));
        });

        $('.single-datepicker-date').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
            $('.simplii_start_date').val('');
            $('.simplii_start_time').val('');
            $('.simplii_end_date').val('');
            $('.simplii_end_time').val('');
        });

    });
    daterangepicker.prototype.outsideClick = function (e) { }


})