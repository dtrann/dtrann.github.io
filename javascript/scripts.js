$(document).ready(function() {
    $("#back-to-top").click(function(){
        scroll(0,0);
    });
    
    $("#about-me").click(function() {
        $("#about").get(0).scrollIntoView();
    });
    
    $("#my-work").click(function(){
        $("#portfolio").get(0).scrollIntoView();
    });
    
    $("#contact-me").click(function(){
        $("footer").get(0).scrollIntoView();
    });
});