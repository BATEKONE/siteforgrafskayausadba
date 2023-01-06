$(document).ready(function() {
    $('.section_slick').slick({
        dots: true,
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 905,
                settings:{
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 700,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 450,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    });
});