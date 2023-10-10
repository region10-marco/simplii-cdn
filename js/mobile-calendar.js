jQuery(document).ready(function ($) {
    $('#mobile-field-start-date, #mobile-field-end-date').on('click', function () {
        $('body').addClass('no-scrolling-effect');
        $('#mobile-start-calendar').show();


    })

    $('.mobile-start-calendar-close').on('click', function() {
        $('body').removeClass('no-scrolling-effect');
        $('#mobile-start-calendar').hide();
        $('#mobile-start-calendar').addClass('mobile-start-calendar-footer-hidden');
    }) 

    $('#mobile-start-calendar').on("mousewheel", function() {

       // console.log($(document).scrollTop());
    });
})