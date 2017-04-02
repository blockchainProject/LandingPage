// navigation scroll
$(document).ready(function(){
    $('.navbar-right .nav-freelancer').on('click',function (e) {
        e.preventDefault();

        var target = "#freelancer"
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        },1000, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$(document).ready(function(){
    $('.navbar-right .nav-client').on('click',function (e) {
        e.preventDefault();

        var target = "#client"
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        },1000, 'swing', function () {
            window.location.hash = target;
        });
    });
});



// button scroll
$(document).ready(function(){
    $('.freelancer-cta button').on('click',function (e) {
        e.preventDefault();

        var target = "#freelancer"
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        },1000, 'swing', function () {
            window.location.hash = target;
        });
    });
});

$(document).ready(function(){
    $('.client-cta button').on('click',function (e) {
        e.preventDefault();

        var target = "#client"
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        },1000, 'swing', function () {
            window.location.hash = target;
        });
    });
});
