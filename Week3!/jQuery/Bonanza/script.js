
$(document).ready(function(){


$(".fadeButton").click(function(){
    $(".test").fadeOut(1200);
});

$(".flip").click(function(){
    $(".panel").slideDown(1000);
});
$("#stop").click(function(){
    $(".panel").stop();
});    

$(".clickButton").click(function(){
    alert("DO NOT click here again.");
});

});

    