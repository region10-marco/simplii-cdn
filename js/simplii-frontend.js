jQuery(document).ready(function ($) {
    $('.car-detail-other-image-container').on('click', function () {
        var image_url = $(this).children('img').attr('src');
        $('#ce-car-detail-image img').attr('src', image_url);
        $('#ce-car-detail-image img').attr('srcset', image_url);
    })

    $('#mobile-kfztype-transporter').on('click', function () {
        //   $('#loading-layer').css('display', 'flex');
        $('.active-change').removeClass('active-change');
        $(this).addClass('active-change');
        $('#mobile-field-kfz-type').val('trans');
    })

    $('#mobile-kfztype-car').on('click', function () {
        //   $('#loading-layer').css('display', 'flex');
        $('.active-change').removeClass('active-change');
        $(this).addClass('active-change');
        $('#mobile-field-kfz-type').val('car');
    })

    $('#kfztype-transporter').on('click', function () {
        //   $('#loading-layer').css('display', 'flex');
        $('.active-change').removeClass('active-change');
        $('#ce-car-slider').hide();
        $('#ce-transport-slider').show();
        $(this).addClass('active-change');
        $('#field-kfz-type').val('trans');
        $('#loading-layer').delay(400).css('display', 'none');


    })

    $('#kfztype-car').on('click', function () {
        //    $('#loading-layer').css('display', 'flex');
        $('.active-change').removeClass('active-change');
        $('#ce-transport-slider').hide();
        $('#ce-car-slider').show();
        $('#field-kfz-type').val('car');
        $(this).addClass('active-change');
        $('#loading-layer').delay(400).css('display', 'none');

    })

    $(document).scroll(function () {
        $('.filter-trigger span').html('');
        $('.filter-trigger').animate().addClass('filter-scroll-trigger');
    });

    $('#datepicker-mobile-selctor').on('click', function () {
        $('#mobile-detail-calendar').show();
        $('body').addClass('no-scrolling-effect');
    })

    $('.mobile-detail-calendar-close').on('click', function () {
        $('#mobile-detail-calendar').hide();
        $('body').removeClass('no-scrolling-effect');
        $('#simplii_detail_desktop_calendar_layer').hide();
    })

    $('#simplii_detail_desktop_calendar_layer').on('click', function () {
        jQuery('body').removeClass('no-scrolling-effect');
        $(this).hide();
    })


    $('#simplii_detail_desktop_calendar_layer').on('click', function () {
        jQuery('body').removeClass('no-scrolling-effect');
        $(this).hide();

        jQuery('#mobile-detail-calendar').hide();
    })

    $('.detail-datepicker').on('click', function () {
        $('#mobile-detail-calendar').show();
        jQuery('body').addClass('no-scrolling-effect');
        $('#simplii_detail_desktop_calendar_layer').show();

    })



})
