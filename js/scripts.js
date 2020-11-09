
$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        slidesToShow: 3,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 1300,
        speed: 1400,
        infinite: true,
        easing: 'ease',
        responsive: [
            {
                breakpoint: 760,
                settings: {
                    slidesToShow: 1
                }
            }
        ]

});
});
