var menuBurger = document.querySelector('.menu-burger');
var headerList = document.querySelector('.header-list');
var layer = document.querySelector('.drawer .layer');
<<<<<<< HEAD
var _totop = $('.to-top');
menuBurger.onclick = function () {
=======
menuBurger.onclick = function() {
>>>>>>> ac6658e541212a61d959ab825158abddc2a29bb5
    menuBurger.classList.toggle('active');
    if (menuBurger.classList.contains('active')) {
        headerList.classList.add('active');
        layer.classList.add('active')
    } else {
        headerList.classList.remove('active');
        layer.classList.remove('active');
    }
}
layer.onclick = function() {
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
$(".slide-line").click(function() {
    $('html, body').animate({
        scrollTop: $(".recruit").offset().top - 150
    }, 2000);
});