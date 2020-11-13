var menuBurger = document.querySelector('.menu-burger');
var headerList = document.querySelector('.header-list');
var layer = document.querySelector('.drawer .layer');
menuBurger.onclick = function() {
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