$(function (){
    var winh = $(window).height(),
        upperh=$(".upper-par").innerHeight();
    $(".slider, .carousel-item").height(winh - (upperh + 200));
    
});

$(function () {
    var w = $(window).height();
    $(".fox").height(w - 100);
});

$(function () {
    var w = $(window).height();
    $(".request").height(w - 200);
});
 $(function (){
    var winh = $(window).height(),
        upperh=$(".upper-par").innerHeight();
    $(".slider-tow").height(winh - (upperh + 400));
    
});

$(function (){
    
    $(".upper-par ul li ").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
});