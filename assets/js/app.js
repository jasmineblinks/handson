// fixed scrolling color change

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $("header").css("background" , "rgba(13, 71, 161, 0.3)");
        }
  
        else{
            $("header").css("background" , "transparent");  	
        }
    })
  })
  

  

  // hamburger menu

  (function() {

    var hamburger = {
        navToggle: document.querySelector('.nav-toggle'),
        nav: document.querySelector('nav'),
    
        doToggle: function(e) {
            e.preventDefault();
            this.navToggle.classList.toggle('expanded');
            this.nav.classList.toggle('expanded');
        }
    };
    
    hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
    
    }());
    
    