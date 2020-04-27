$(function () {
    let boolToggler = true;
    $(document).on("click", ".toggler", function () {
      if (boolToggler) {
      
        $("#header").addClass('header-show');
        $('.header-show .toggler').addClass('toggler-active');
        $(".header-show .toggler span .line").addClass('toggler-line-active');
  
        $('.toggler').addClass('active');
        setTimeout(function () {
          $('.toggler').addClass('active-second');
        },300);
        setTimeout(function () {
          $('.toggler').addClass('active-last');
        },600);

     

        $(".phone a").addClass("phone-a");
        $(".phone a").addClass("phone-icon");
  
    
        $(".phone span").addClass("span-aside");
  
        $("#aside-nav").addClass("show-aside");
       
       
        boolToggler = false;
      } else if (!boolToggler) {
      
        $("#header").removeClass('header-show');
        $('.toggler').removeClass('toggler-active');
        $(".toggler span .line").removeClass('toggler-line-active');
      
     
        $('.toggler').removeClass('active-last');
        setTimeout(function () {
          $('.toggler').removeClass('active-second');
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
  