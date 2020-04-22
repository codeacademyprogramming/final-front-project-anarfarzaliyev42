$(function () {
    let boolToggler = true;
    $(document).on("click", ".toggler", function () {
      if (boolToggler) {
      
        $("#header").addClass('header-show');
        $('.header-show .toggler').addClass('toggler-active');
        $(".header-show .toggler span em").addClass('toggler-em-active');
        $('.main-content').addClass('margin-top');
        $('.toggler').addClass('active');
        setTimeout(function () {
          $('.toggler').addClass('active_second');
        },300);
        setTimeout(function () {
          $('.toggler').addClass('active_last');
        },600);

        

        $(".phone a").addClass("phone-a");
        $(".phone a").addClass("phone-icon");
  
    
        $(".phone span").addClass("span-aside");
  
        $("#aside-nav").addClass("show-aside");
       
       
        boolToggler = false;
      } else if (!boolToggler) {
      
        $("#header").removeClass('header-show');
        $('.toggler').removeClass('toggler-active');
        $(".toggler span em").removeClass('toggler-em-active');
        $('.main-content').removeClass('margin-top');
     
        $('.toggler').removeClass('active_last');
        setTimeout(function () {
          $('.toggler').removeClass('active_second');
        },300);
        setTimeout(function () {
          $('.toggler').removeClass('active');
        },600);

        $(".phone a").removeClass("phone-a");

        $(".phone a").removeClass("phone-icon");
        $(".phone span").removeClass("span-aside");
 
    
        $(".phone span").addClass("phone-white");
        $(".phone a").addClass("phone-white");
        $("#aside-nav").removeClass("show-aside");
      
        boolToggler = true;
      }
    });
   
  });
  