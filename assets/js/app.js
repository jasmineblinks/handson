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
  

  

  
    

// function myFunction() {
//     var x = document.getElementById("thenav");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }
  const burger = () => {
    var q = document.getElementById("thenav");
    if (q.style.display === "block") {
      q.style.display = "none";
    } else {
      q.style.display = "block";
    }
  }
 
  let link = document.querySelector('.icon')
  link.addEventListener('click', function(event) {
    event.preventDefault(); burger()
  });