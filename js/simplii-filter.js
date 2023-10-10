jQuery(document).ready(function ($) {
    $('.simplii_filter_value').change(function () {

        filter_simplii_cars();

    })

    $('.reset_filter_container').on('click', function () {
        $(".simplii_filter_value").each(function (index) {
            $(this).prop('checked', false);
            filter_simplii_cars();

        });
    })

    $('.filterhead').on('click', function () {
        if ($(this).parent('.filter_container').hasClass('openFilter')) {
            $(this).parent('.filter_container').removeClass('openFilter');
        } else {
            $('.filter_container').removeClass('openFilter');
            $(this).parent('.filter_container').addClass('openFilter');
        }

    })
})



function filter_simplii_cars() {

    jQuery('.no_result_message').hide();

    jQuery(".simplii-single-car-element").each(function (index) {
        jQuery(this).hide();
    });
    filter_values = [];
    jQuery(".simplii_filter_value").each(function (index) {
        if (jQuery(this).is(':checked')) {
            filter_values.push(jQuery(this).val());

        }
    });

    jQuery(".simplii-single-car-element").each(function (index) {
        jQuery(this).removeClass('filtered')
    });

    if (filter_values.length === 0) {
        jQuery(".simplii-single-car-element").each(function (index) {
            jQuery(this).show();
        });
    }


    jQuery.ajax({
        type: "POST",
        url: simplii_ajax.ajaxurl,
        data: {
            action: 'request_car_filterin',
            filter_vals: filter_values
        },
        dataType: 'json',
        success: function (response) {
            cars = response.data;
            cars_check = false;
            jQuery.each(cars, function (key, value) {
                jQuery('.single-car-' + value).show();
                jQuery('.single-car-' + value).addClass('filtered');

            });

            jQuery(".simplii-single-car-element").each(function (index) {
                if (jQuery(this).hasClass('filtered')) {
                    cars_check = true;
                }
            });

            if (cars_check === false) {
                jQuery('.no_result_message').fadeIn();
            }
        }
    });

}