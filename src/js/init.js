$(function() {
    $("#newest-tabs").tabs();

    $("#product-tabs").tabs();

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

    if (document.querySelector('#modal')) {
        $("#modal").iziModal({
            width: 730,
            radius: 0,
            background: '#8bc34a'
        });
    }
    $(document).on('click', '.login-form', function (event) {
        event.preventDefault();
        $('#modal').iziModal('open');
    });
    $(document).on('click', '.login__close', function (event) {
        event.preventDefault();
        $('#modal').iziModal('close');
    });

    if(document.querySelector('.upload-form')) {
        setTimeout(function() {
            $('.upload-form select').styler();
        }, 100);

        setTimeout(function() {
            $('.upload-form .upload-form__fileinput').styler();
        }, 100);

        setTimeout(function() {
            $('.upload-form .upload-form__text-input--number').styler();
        }, 100);
    }

    if (document.querySelector('.product-price__select')) {
        setTimeout(function() {
            $('select').styler();
        }, 100);
    }

    if (document.querySelector('.js-range-slider')) {
        $(".js-range-slider").ionRangeSlider(
            {
                type: "double",
                skin: 'round',
                prefix: '$',
                min: 0,
                max: 1600,
                from: 0,
                to: 600,
                grid: false,
                hide_min_max: true
            }
        );
    }
});

if (document.getElementById('search__mobile-btn')) {
    let searchMobBtn = document.getElementById('search__mobile-btn');
    let closeSideBar = document.getElementById('main__sidebar-close');

    searchMobBtn.addEventListener("click", function() {
        let sidebar = document.getElementById('main__sidebar');
        setTimeout(function () {
            sidebar.classList.toggle('main__sidebar--active');
        }, 100)
    });
    closeSideBar.addEventListener("click", function() {
        let sidebar = document.getElementById('main__sidebar');
        setTimeout(function () {
            sidebar.classList.toggle('main__sidebar--active');
        }, 100)
    });
}


let menuBtn = document.getElementById('nav__btn');

menuBtn.addEventListener("click", function() {
    let menu = document.getElementById('nav__nav');
    setTimeout(function () {
        menu.classList.toggle('d-sm-none');
    }, 100)
});
