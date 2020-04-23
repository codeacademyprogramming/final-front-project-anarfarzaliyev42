$(function () {

    $(document).on('click','.open-menu',function (e) {
        e.preventDefault();
        $(this).closest('.branches-menu').find('div').toggle();
    })
   //****************************** */
    $(document).on('change','.open-menu-select',function () {
        console.log($(this).find('option').attr('value'));
        
    })

  });
   