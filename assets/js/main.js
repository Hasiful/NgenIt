
var navToggoler = document.querySelectorAll(".nav_toogler")
var subNav = document.querySelectorAll(".sub_nav")

navToggoler.forEach(toggoler => {
    toggoler.addEventListener("click", function() {
        navToggoler.forEach(subNav => subNav.classList.toggle("active"))
            // this.classList.add("active")
    })
});


$('.banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true
});


$(document).ready(function() {
    $('.populer_product_slider').slick({
        dots: true,
        autoplay: false,
        arrows: true,
        infinite: true,
        slidesToShow: 4,
        speed: 200,

        centerPadding: '80px',
        responsive: [{
                breakpoint: 760,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    items: 1,
                }

            },

            {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    items: 1,
                }

            },

        ]
    });
});