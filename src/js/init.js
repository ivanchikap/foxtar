$(function() {
    $("#newest-tabs").tabs();

    // $("#portfolio__tabs").tabs();

    // $('#owl-carousel').owlCarousel({
    //     loop:true,
    //     items:1,
    //     nav: true,
    //     dots: true
    // });
});



let menuBtn = document.getElementById('nav__btn');


menuBtn.addEventListener("click", function() {
    let menu = document.getElementById('nav__nav');
    setTimeout(function () {
        menu.classList.toggle('d-sm-none');
    }, 100)
});
