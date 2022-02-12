/*-----------------------------------------------------------------------------------

    Theme Name: Zain
    Theme URI: http://
    Description: The Multi-Purpose Onepage Template
    Author: UI-ThemeZ
    Author URI: http://themeforest.net/user/UI-ThemeZ
    Version: 1.0

-----------------------------------------------------------------------------------*/


$(function () {

    "use strict";

    var wind = $(window);

    // $(function () {
    //     $.scrollIt({
    //         upKey: 38,                // key code to navigate to the next section
    //         downKey: 40,              // key code to navigate to the previous section
    //         easing: 'swing',          // the easing function for animation
    //         scrollTime: 600,          // how long (in ms) the animation takes
    //         activeClass: 'active',    // class given to the active nav element
    //         onPageChange: null,       // function(pageIndex) that is called when page is changed
    //         topOffset: -80            // offste (in px) for fixed top navigation
    //     });
    // });



    // navbar scrolling background
    // wind.on("scroll", function () {

    //     var bodyScroll = wind.scrollTop(),
    //         navbar = $(".navbar")

    //     if (bodyScroll > 100) {

    //         navbar.addClass("nav-scroll");

    //     } else {

    //         navbar.removeClass("nav-scroll");
    //     }
    // });

    // navbar scrolling background
    // wind.on("scroll", function () {

    //     var bodyScroll = wind.scrollTop(),
    //         navLight = $(".nav-light"),
    //         logo = $(".nav-light .logo> img");

    //     if (bodyScroll > 100) {

    //         navLight.addClass("nav-scroll");
    //         logo.attr('src', 'img/logo-dark.png');

    //     } else {

    //         navLight.removeClass("nav-scroll");
    //         logo.attr('src', 'img/logo-light.png');
    //     }
    // });

    // magnificPopup
    $('.gallery').magnificPopup({
        delegate: '.popup',
        type: 'image',
        mainClass: 'mfp-zoom-out',
        // removelDelay: 300,
        gallery: {
            enabled: true
        }
    });


});


// === window When Loading === //

// PreLoader
// window.addEventListener("load", () => {
//     const loading = document.querySelector(".loading");
//     loading.classList.add("loading-finished")
// })

$(window).on("load", function () {

    var wind = $(window);

    // isotope
    $('.gallery').isotope({
        // options
        itemSelector: '.items',
        percentPosition: true,
        masonry: {
            // use element for option
            columnWidth: '.width2'
        }
    });

    var $gallery = $('.gallery').isotope({
        // options
    });

    // filter items on button click
    $('.filtering').on('click', 'button', function () {

        var filterValue = $(this).attr('data-filter');

        $gallery.isotope({ filter: filterValue });

    });

    $('.filtering').on('click', 'button', function () {

        $(this).addClass('active').siblings().removeClass('active');

    });

});
