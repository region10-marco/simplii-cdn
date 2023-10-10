jQuery(document).ready(function ($) {
    $('.filter-value-single-container').on('click', function () {
        if ($(this).hasClass('inactive_filter')) {
            $(this).addClass('active_filter');
            $(this).removeClass('inactive_filter');
        } else {
            $(this).addClass('inactive_filter');
            $(this).removeClass('active_filter');
        }

        filter_cars();
    })

    $('#filter_rst').on('click', function () {
        filter_reset();
    });

 
 
});

function hide_filter() {
    jQuery('.fusion-tb-footer').css('opacity', 1);
    jQuery('.simplii-carlist').removeClass('no-scroll');
    jQuery("#simpliiFilter").removeClass('filter-open');


   jQuery(".simplii-car-container-version-2").css('overflow', 'scroll');
}

function animateFilter() {

    if(jQuery("#simpliiFilter").hasClass('filter-open')) {
        jQuery('.fusion-tb-footer').css('opacity', 1);
        jQuery('.simplii-carlist').removeClass('no-scroll');
        jQuery("#simpliiFilter").removeClass('filter-open');


       jQuery(".simplii-car-container-version-2").css('overflow', 'scroll');
    } else {
        jQuery("#simpliiFilter").addClass('filter-open');
        jQuery('.simplii-carlist').addClass('no-scroll');
        jQuery('.fusion-tb-footer').css('opacity', 0);

       jQuery(".simplii-car-container-version-2").css('overflow', 'hidden');
    }

  }

function filter_cars() {

    jQuery('.simplii-single-car-element').hide();

    const filter_values = [];

    jQuery('.filter-value-single-container').each(function(i) {
          if (jQuery(this).hasClass('active_filter')) {
            filter_type = jQuery(this).attr('filter_type');
            filter_value =  jQuery(this).attr('filter_value');
            filter_key =  jQuery(this).attr('filter_key');
            single_value = filter_type+'#'+filter_value+'#'+filter_key;
            filter_values.push(single_value);
          }
    })

    jQuery.ajax({
        type: "POST",
        url: simplii_ajax.ajaxurl,
        data: {
            action: 'simplii_filter',
            filter_values: filter_values
        },
        success: function (response) {
           console.log(response.data);
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

function filter_reset() {

    jQuery('.simplii-single-car-element').hide();

    const filter_values = [];


    jQuery.ajax({
        type: "POST",
        url: simplii_ajax.ajaxurl,
        data: {
            action: 'simplii_filter',
            filter_values: filter_values
        },
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

