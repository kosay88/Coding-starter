$(document).ready(function(){

$("#img_a1").on('click', function(){
    $(this).children().attr("src", "1b.jpg"); 
});

$("#img_a2").on('click', function(){
    $(this).children().attr("src", "2b.jpg");
});

$("#img_a3").on('click', function(){
    $(this).children().attr("src", "3b.jpg");
});

});