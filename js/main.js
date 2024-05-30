(function ($) {
    "use strict";

   $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000
});

$(".testimonial-carousel-1").owlCarousel({
    loop: true,
    dots: false,
    margin: 25,
    autoplay: true,
    slideTransition: 'linear',
    autoplayTimeout: 0,
    autoplaySpeed: 10000,
    autoplayHoverPause: false,
    responsive: {
        0:{
            items:1
        },
        575:{
            items:1
        },
        767:{
            items:2
        },
        991:{
            items:3
        }
    }
});
 
})(jQuery);

