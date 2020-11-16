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
        scrollTop: $("#scrollTo").offset().top - 100
    }, 1000);
});

$(window).on('resize scroll', function () {
    var win = $(this);
    var scrollTo = window.pageYOffset;
    console.log(win.width() > 992)
    if (win.width() > 992) {

        console.log(scrollTo)
        if (scrollTo > 100) {
            header.classList.add('fixed');
        }
        else {
            header.classList.remove('fixed')
        }
    } else if (win.width() <= 992) {

        header.classList.remove('fixed')
        if (scrollTo > 100) {
            header.classList.add('fixed-992');
        }
        else {
            header.classList.remove('fixed-992')
        }
    }
});