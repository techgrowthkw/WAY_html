// Header Scrolled
$(document).on('scroll', function() {
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
            $("header").addClass("scrolled");
        }
        else{
            $("header").removeClass("scrolled");
        }
    });
});
// Side Menu
$(document).ready(function() {
    $(".toggle-menu").click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".toggle-menu, .side-wrapper").toggleClass("active");
    });
});
// Owl
$(document).ready(function() {
    $('.owl-carousel.news-slider').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"] ,
        margin: 0,
        responsive:{
            0:{
                items:1,
            },
        },
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });
    $('.owl-carousel.testimonials-slider').owlCarousel({
        loop: true,
        dots: true,
        nav: false,
        margin: 0,
        stagePadding: 0,
        responsive:{
            0:{
                items:1,
            },
        },
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true
    });
})
$(document).ready(function () {
    $(".toggle-book").click(function (e) {
        e.preventDefault();
        $(this).toggleClass("active");
        $(".book-btns").toggleClass("active");
    })
})
// Time slots
$("ul.time-slots li button:not(:disabled)").click(function () {
    $("ul.time-slots li button").removeClass("active")
    $(this).addClass("active")
})
// WOW =====================
$(document).ready(function(){
    wow = new WOW
    (
        {
            boxClass: 'wow',            // default
            animateClass: 'animated',   // default
            offset: 1,                  // default
            mobile: false,               // default
            live: true                  // default
        }
    );
    wow.init()
});
