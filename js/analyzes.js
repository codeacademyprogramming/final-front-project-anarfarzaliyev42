$(function () {
  //Payment
  $(document).on("keyup", "#amount", function () {
    let valuePrice = $(this).val();

    if (valuePrice == "") {
      valuePrice = 0;
      $(".price").removeClass("price-active");
      $(".price strong").text(valuePrice);

    } 
    else if(valuePrice > 500){
      $(".price").addClass("price-active");
      $(".price strong").text('500');
    }
    else if (valuePrice >= 0 &&valuePrice<=500) {
      $(".price").addClass("price-active");
      $(".price strong").text(valuePrice);
    }
   
  });

 // Payment Inputmask added here --------------------------------
  $("#phone").inputmask("+\\9\\94 99 999 99 99",{
    
    greedy: true,
    showMaskOnFocus: true,
    showMaskOnHover: true
  });
  // Only number validation for input amount
  $(document).on('keypress','#amount',function () {
    validate($(this).val());
  })
 function validate(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  // Check only number regex
  var regex = /[0-9]|\./;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if(theEvent.preventDefault) theEvent.preventDefault();
  }
}


});
