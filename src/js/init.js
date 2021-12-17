$(function() {
    $("#newest-tabs").tabs();

    // $("#portfolio__tabs").tabs();

    $('#owl-carousel').owlCarousel({
        loop:true,
        items:4,
        nav: false,
        dots: true,
        margin: 15,
        responsive: {
            1200: {
                items: 4
            },
            960: {
                items: 3
            },
            720: {
                items: 2
            },
            0: {
                 items: 1
            }
        }
    });

    $('.upload-form select').styler();
    $('.upload-form .upload-form__fileinput').styler();
    $('.upload-form .upload-form__text-input--number').styler();
});



let menuBtn = document.getElementById('nav__btn');


menuBtn.addEventListener("click", function() {
    let menu = document.getElementById('nav__nav');
    setTimeout(function () {
        menu.classList.toggle('d-sm-none');
    }, 100)
});
