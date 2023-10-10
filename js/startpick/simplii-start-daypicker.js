jQuery(document).ready(function ($) {

    /*
        jQuery(function () {
    
            $('input[name="datetimes"]').daterangepicker({
                autoUpdateInput: false,
                minDate: new Date(),
                isInvalidDate: function (ele) {
                    var currDate = moment(ele._d).format('DD.MM.YYYY');
                    return ["15.07.2023"].indexOf(currDate) != -1;
                },
                "locale": {
                    "format": "DD.MM.YYYY",
                    "separator": " - ",
                    "applyLabel": "Auwählen",
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
                "inline": false,
                "opens": "center",
                "drops": "down",
                "parentEl": "px-start-slider-inner",
    
            });
    
            $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
                $(this).val(picker.startDate.format('DD.MM.YYYY') + ' - ' + picker.endDate.format('DD.MM.YYYY'));
                $('#px_start_date').val(picker.startDate.format('DD.MM.YYYY'));
                $('#px_end_date').val(picker.endDate.format('DD.MM.YYYY'));
                $('#startslider-date').removeClass('error-placeholder');
                $('#px_check').val('true');
    
            });
    
            $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
                $(this).val('');
            });
    
        });
    
    
        // SUBMIT START FORM START
    
        $("#startform").submit(function (e) {
            e.preventDefault();
            $('#startslider-date').removeClass('error-placeholder');
            if ($('#px_check').val() === 'false') {
                $('#startslider-date').addClass('error-placeholder');
            } else {
                e.currentTarget.submit();
            }
        });
    
    
        // SUBMIT START FORM END 
    */

    jQuery(function () {
        jQuery('input[name="start-date-range"]').daterangepicker({

            autoUpdateInput: false,
            minDate: new Date(),
            isInvalidDate: function (ele) {
                var currDate = moment(ele._d).format('DD.MM.YYYY');
                return ["15.07.2023"].indexOf(currDate) != -1;
            },
            "locale": {
                "format": "DD.MM.YYYY",
                "separator": " - ",
                "applyLabel": "Auwählen",
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
            "inline": true,
            "opens": "center",
            "drops": "down",
            parentEl: $(this).parent()
        });
    });

    $(".daterangepicker").show();
})