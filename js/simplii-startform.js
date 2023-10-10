jQuery(document).ready(function ($) {
    $('.date-container-start, .date-container-end').on('click', function () {
        if ($(window).width() > 640) {
            $('#ce-start-book-form-main-container').removeClass('small-index');
            $('#ce-start-book-form-main-container').addClass('big-index');

            $('body').addClass('no-scrolling-effect');
            $('.startform_layer').css('display', 'grid');
            $('html, body').animate({
                scrollTop: $("#startform-container").offset().top - 140
            }, 300);
            $('#desktop-calendar-layer').show();
            $('#startform-container-inner').addClass('no-display');
            $('.with-shadow').removeClass('with-shadow');
            // $('body').css('overflow', 'hidden');
        } else {
            $('#full-startform').css('display', 'grid');
            // $('body').css('overflow', 'hidden');
        }
    })

    $('.startlayer-close').on('click', function () {
        $('#full-startform').hide('slow');
        $('#startform-container-inner').removeClass('no-display');
        $('body').css('overflow', 'unset');
    })


    $('#desktop-calendar-layer').on('click', function() {
        $('#startform-container').addClass('with-shadow');
        $('.startform_layer').css('display', 'none');
        $('body').removeClass('no-scrolling-effect');
        $('#ce-start-book-form-main-container').removeClass('big-index');
        $('#ce-start-book-form-main-container').addClass('small-index');
        $('#startform-container-inner').removeClass('no-display');
        $('#desktop-calendar-layer').hide();
    })

})