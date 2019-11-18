$(document).ready(function () {
    $('.my-carousel').slick({
        dots: true,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.title-carousel').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 1500
    });
});

