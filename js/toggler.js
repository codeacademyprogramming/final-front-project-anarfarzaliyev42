$(function () {
    let boolToggler = true;
    $(document).on("click", ".toggler", function () {
      if (boolToggler) {
        $('body').css({
          'overflow-y':'hidden',

        });
        $(".toggler").addClass("toggler-bg");
        $("header").addClass("aside-active");
        $(".phone a").addClass("phone-a");
        $(".phone a").addClass("phone-icon");
  
        $(".toggler span em").addClass("aside-em");
        $(".phone span").addClass("span-aside");
  
        $("#aside-nav").addClass("show-aside");
        $(".toggler span em:nth-child(2)").css({
          top: "6px",
          transform: "rotate(-45deg)",
        });
        $(".toggler span em:last-child").css({
          top: "6px",
          transform: "rotate(45deg)",
        });
        $(".toggler span em:first-child").css({
          opacity: "0",
        });
        boolToggler = false;
      } else if (!boolToggler) {
        $('body').css({
          'overflow-y':'auto',
          
        });
        $(".phone a").removeClass("phone-a");
        $(".toggler").removeClass("toggler-bg");
        $(".phone a").removeClass("phone-icon");
        $(".phone span").removeClass("span-aside");
        $(".toggler span em").removeClass("aside-em");
        $("header").removeClass("aside-active");
        $(".phone span").addClass("phone-white");
        $(".phone a").addClass("phone-white");
        $("#aside-nav").removeClass("show-aside");
        $(".toggler span em:nth-child(2)").css({
          top: "6px",
          transform: "rotate(0deg)",
        });
        $(".toggler span em:last-child").css({
          top: "12px",
          transform: "rotate(0deg)",
        });
        $(".toggler span em:first-child").css({
          opacity: "1",
        });
        boolToggler = true;
      }
    });
   
  });
  