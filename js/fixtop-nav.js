$(function () {
    var fixmeTop = $(".main-nav").offset().top; 
    // get initial position of the element

    $(window).scroll(function () {
      // assign scroll event listener
  
      var currentScroll = $(window).scrollTop(); 
      // get current position
  
      if (currentScroll >= fixmeTop) {
        // apply position: fixed 
        $(".main-nav").css({
          // scroll to that element or below it
          position: "fixed",
  
          'top': '20px',
        });
      }
       else {
        // apply position: static
        $(".main-nav").css({
      
          position: "absolute",
          
          'top': '248px',
        });
      }
    });
})