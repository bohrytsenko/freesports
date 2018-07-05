$( document ).ready(function() {

   // Slider

    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });



    // Mobile nav

    $(".nav_mobile__icon").click(function(){
        $(this).toggleClass('active');
        $('.nav_mobile ul').toggleClass('show');
        $('body').toggleClass('overflow');
    });

    // Open question

    $('.question_item .question_item__icon').on('click', function() {
        $(this).parent('.question_item').children('.question_item__hidden').slideToggle('1000');
        $(this).parent('.question_item').children('.question_item__hidden').toggleClass('visible');
        $(this).toggleClass('active');
    });

    // Tabs

    $(".all").addClass('question_item__active');
    $(".questions_tab a").click(function(){
        $(".question_item").removeClass('question_item__active');
        var elementClass = $(this).attr("id");
        $(".question_item." + elementClass).addClass('question_item__active');

        return false;
    });

    // Scroll to

    $("#menu-header a").on("click", function(e) {
        e.preventDefault();
        var o = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(o).offset().top - 20
        }, 1000);
    });

    $("#menu-header-2 a").on("click", function(e) {
        e.preventDefault();
        var o = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(o).offset().top - 20
        }, 1000);
    });


    $(".questions_tab a").on("click", function(e) {
        e.preventDefault();
        var o = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(o).offset().top - 20
        }, 1000);
    });

});


var controller = new ScrollMagic.Controller();

// Header
if ($( window ).width() > 767) {

    var t0 = new TimelineLite();
    t0.staggerFromTo('.header_top__nav li', 3, { opacity: 0}, { opacity: 1}, 0.2);

    var t1 = new TimelineLite();
    t1.staggerFromTo('.welcome__title .line', 2, { opacity: 0, height: 0}, { opacity: 1, height: '100%'}, 0.1);

    var t2 = new TimelineLite();
    t2.staggerFromTo('.welcome__title .title', 2, { opacity: 0, y: -50}, { opacity: 1, y: 0}, 0.1);

    var t3 = new TimelineLite();
    t3.staggerFromTo('.welcome__text', 2, { opacity: 0, y: -70}, { opacity: 1, y: 0}, 0.2);

    var t4 = new TimelineLite();
    t4.staggerFromTo('.welcome__btn', 2, { opacity: 0, y: -90}, { opacity: 1, y: 0}, 0.3);


    // Header bg

    var tween1 = TweenMax.staggerFromTo(".welcome", 2, {backgroundPosition:'right 1px'}, {backgroundPosition: 'right 200px'}, 1);
    var scene = new ScrollMagic.Scene({
        triggerElement: ".category", duration: 2000,
        triggerHook: 1,
        offset: 0
    })
        .setTween(tween1)
        .addTo(controller);

    // Category line

    var tween2 = TweenMax.staggerFromTo(".category_item__title .line_top", 2, {width: 0}, {width: '100%'}, 1);
    var scene = new ScrollMagic.Scene({
        triggerElement: ".category_item", duration: 1500,
        triggerHook: 1,
        offset: 0
    })
        .setTween(tween2)
        .addTo(controller);

    var tween3 = TweenMax.staggerFromTo(".category_item__title .line_bottom", 2, {width: 0}, {width: '100%'}, 1);
    var scene = new ScrollMagic.Scene({
        triggerElement: ".category_item", duration: 1500,
        triggerHook: 1,
        offset: 0
    })
        .setTween(tween3)
        .addTo(controller);

    // Affiliates title

    var tween4 = TweenMax.staggerFromTo(".affiliates__title", 2, {opacity: 0, y: -50}, {opacity: 1, y: 0}, 1);
    var scene = new ScrollMagic.Scene({
        triggerElement: ".affiliates", duration: 1000,
        triggerHook: 1,
        offset: 0
    })
        .setTween(tween4)
        .addTo(controller);

    // Affiliates list

    var tween5 = TweenMax.staggerFromTo(".affiliates_item", 2, {opacity: 0, y: -50}, {opacity: 1, y: 0}, 1);
    var scene = new ScrollMagic.Scene({
        triggerElement: ".affiliates", duration: 1000,
        triggerHook: 1,
        offset: 0
    })
        .setTween(tween5)
        .addTo(controller);

    // Header bg

    var tween6 = TweenMax.staggerFromTo(".welcome", 2, {backgroundPosition:'right 0'}, {backgroundPosition: 'right 200px'}, 1);
    var scene = new ScrollMagic.Scene({
        triggerElement: ".category", duration: 2000,
        triggerHook: 1,
        offset: 0
    })
        .setTween(tween6)
        .addTo(controller);

    // Testimonials

    var tween7 = TweenMax.staggerFromTo(".testimonials__title", 2, {opacity: 0, y: -50}, {opacity: 1, y: 0}, 2);
    var scene = new ScrollMagic.Scene({
        triggerElement: ".testimonials", duration: 1000,
        triggerHook: 1,
        offset: 0
    })
        .setTween(tween7)
        .addTo(controller);

    // Questions

    var tween8 = TweenMax.staggerFromTo(".questions__title", 2, {opacity: 0, y: -50}, {opacity: 1, y: 0}, 1);
    var scene = new ScrollMagic.Scene({
        triggerElement: ".questions", duration: 1000,
        triggerHook: 1,
        offset: 0
    })
        .setTween(tween8)
        .addTo(controller);

    var tween9 = TweenMax.staggerFromTo(".questions__text", 2, {opacity: 0, y: -100}, {opacity: 1, y: 0}, 2);
    var scene = new ScrollMagic.Scene({
        triggerElement: ".questions", duration: 1000,
        triggerHook: 1,
        offset: 0
    })
        .setTween(tween9)
        .addTo(controller);

    var tween10 = TweenMax.staggerFromTo(".question_item", 2, {opacity: 0, y: -50}, {opacity: 1, y: 0}, 2);
    var scene = new ScrollMagic.Scene({
        triggerElement: ".questions_tab", duration: 800,
        triggerHook: 1,
        offset: 0
    })
        .setTween(tween10)
        .addTo(controller);

    // Footer

    var tween11 = TweenMax.staggerFromTo(".footer", 2, {backgroundPosition:'right -200px'}, {backgroundPosition: 'right 1px'}, 1);
    var scene = new ScrollMagic.Scene({
        triggerElement: ".footer", duration: 500,
        triggerHook: 1,
        offset: 0
    })
        .setTween(tween11)
        .addTo(controller);


}

// Preloader

(function() {

    'use strict';

    var overlay = document.querySelector('.overlay'),
        loader = document.querySelector('.overlay-loader'),
        overlayTL = new TimelineMax(),
        loaderTL = new TimelineMax();

    var animateOut_2 = function() {
        overlayTL.to( overlay, .6, { top: '100%', ease: Power4.easeInOut, delay: .25 } );
        loaderTL.to( loader, .5, { y: '40', opacity: 0 } );
    };

    var animateIn = function() {
        overlayTL.fromTo( overlay, .6, { top: '100%', bottom: 0 }, { top: 0, ease: Power4.easeInOut } );
        loaderTL.fromTo( loader, .5, { y: '40', opacity: 0, delay: .30 }, { y: 0, opacity: 1, delay: .6, ease: Power2.easeOut } );
    };

    animateOut_2();
})();



