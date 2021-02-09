$(function() {
  var navClik = true;
  var lastScrollTop = 0;
  var cheakStkiyNav = true;
  // Nav Btn
  $(".nav-btn").click(function(e) {
    e.preventDefault();
    if (navClik) {
      $(".small-nav").slideToggle(400);
      navClik = false;
    }
    setTimeout(() => {
      navClik = true;
    }, 500);
  });
  //Close Nav on Scroll
  $(document, window).scroll(function() {
    $(".small-nav").slideUp(400);
    navClik = true;
    //Stkicy nav
    $(window).scroll(function(e) {
      e.preventDefault();
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
        // downscroll code
        if ($(document).scrollTop() > 900) {
          if (cheakStkiyNav) {
            $(".nav").css({ top: "-100px", position: "fixed" });
            $(".nav").animate({ top: 0 }, 900);
            cheakStkiyNav = false;
          }
        }
      } else {
        // upscroll code
        if ($(document).scrollTop() <= 900) {
          if (!cheakStkiyNav) {
            $(".nav").animate({ top: -100 }, 900,function(){
              $(".nav").css({ top: "0px", position: "relative" });
            });
            cheakStkiyNav = true;
          }
        }
      }
      lastScrollTop = st;
    });
  });

  // Smoth scroll 
  $('nav a.nav-item').click(function(e){
    e.preventDefault();
    // get link id 
    var navId = $(this).attr('id');
    navId ="."+navId;
    $('html, body').animate({
      scrollTop: $(navId).offset().top - 150,
    },1000);
  });
});
