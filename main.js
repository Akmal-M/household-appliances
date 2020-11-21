$(document).ready(function(){
    $("#menu").click(function(){
        $("#navbar-right").slideToggle(500);
    });

    $('li').click(function(){
        $('#navbar-right').fadeOut();
    });
});