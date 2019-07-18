$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 200) {
          $("header").css("background" , "blue");
        }
  
        else{
            $("header").css("background" , "rgba(0,0,0,0.05)");  	
        }
    })
  })