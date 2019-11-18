(function ($) {
    'use strict';

    $('a[href="#"]').click(function ($) {
        $.preventDefault()
    });

    var $window = $(window);

    $window.on('scroll', function () {
        if ($window.scrollTop() > 0) {
            $('.header-area').addClass('sticky');
            $('.header-banner').addClass('sticky');
        } else {
            $('.header-area').removeClass('sticky');
            $('.header-banner').removeClass('sticky');
        }
    });

})(jQuery);
