var menuBurger = document.querySelector('.menu-burger');
var headerList = document.querySelector('.header-list');
var layer = document.querySelector('.drawer .layer');
var header = document.querySelector('.header');
var _totop = $('.to-top');
menuBurger.onclick = function () {
    menuBurger.classList.toggle('active');
    if (menuBurger.classList.contains('active')) {
        headerList.classList.add('active');
        layer.classList.add('active')
    } else {
        headerList.classList.remove('active');
        layer.classList.remove('active');
    }
}
layer.onclick = function () {
    menuBurger.classList.remove('active');
    headerList.classList.remove('active');
    layer.classList.remove('active')
}

_totop.click(function (e) {
    e.preventDefault();
    $("html,body").animate({
        scrollTop: 0,
    },
        1000,
        "swing"
    );
});
$(".slide-line").click(function () {
    $('html, body').animate({
        scrollTop: $("#scrollTo").offset().top - 150
    }, 1000);
});

window.onscroll = function () {
    var scrollTo = window.pageYOffset;
    console.log(scrollTo)
    if (scrollTo > 300) {
        header.classList.add('fixed');
    }
    else {
        header.classList.remove('fixed')
    }
}