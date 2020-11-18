var menuBurger = document.querySelector('.menu-burger');
var headerList = document.querySelector('.header-list');
var layer = document.querySelector('.drawer .layer');
var header = document.querySelector('.header');
var _totop = $('.to-top');
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

_totop.click(function(e) {
    e.preventDefault();
    $("html,body").animate({
            scrollTop: 0,
        },
        1000,
        "swing"
    );
});

$('.js-map-close').on('click', function() {
    $(this).parents('.js-content').remove();
});

// const map = new maps.google.com.map(document.getElementById('map-iframe'), {
//     clickableIcons: false
// });



// var map = new google.maps.Map(document.getElementById("map-iframe"), {
//     draggable: false,
//     zoomControl: false,
//     scrollwheel: false,
//     disableDoubleClickZoom: false,
//     gestureHandling: 'none'
// });
// // var doc = document.getcontentWindow.document;
// $("#map-iframe").on("click", function(e) {
//     e.preventDefault();
//     console.log('asd');
// });
// _delay(setMap, 20000);
// console.log(map);

// map.setOptions({  });

// map.dragging = "false";

$(".slide-line").click(function() {
    $('html, body').animate({
        scrollTop: $("#scrollTo").offset().top - 100
    }, 1000);
});

$(window).on('resize scroll', function() {
    var win = $(this);
    var scrollTo = window.pageYOffset;
    if (win.width() > 992) {
        if (scrollTo > 100) {
            header.classList.add('fixed');
        } else {
            header.classList.remove('fixed')
        }
    } else if (win.width() <= 992) {

        header.classList.remove('fixed')
        if (scrollTo > 100) {
            header.classList.add('fixed-992');
        } else {
            header.classList.remove('fixed-992')
        }
    }
});

var _timeout;

function _delay(fn, timed) {
    clearTimeout(_timeout);
    return _timeout = setTimeout(fn, timed);
}