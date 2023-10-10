jQuery(document).ready(function ($) {
    $('#ce-mobile-header-menu-trigger').on('click', function () {
       $('body').addClass('no-scrolling-effect');
        $(".simplii-mobile-menu-layer").show();
        $(".simplii-mobile-menu-layer").animate({"right":"0px"}, "slow");
    })

    $('.mobile-menu-layer-close').on('click', function() {
        $('body').removeClass('no-scrolling-effect');
        $(".simplii-mobile-menu-layer").animate({"right":"-120%"}, "slow");
        $(".simplii-mobile-menu-layer").hide();
    })
})