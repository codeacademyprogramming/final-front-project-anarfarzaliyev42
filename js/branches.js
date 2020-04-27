$(function () {

    //Location icon click
    $(document).on('click','.open-menu',function (e) {
        e.preventDefault();
        $(this).closest('.branches-menu').find('div').toggle();
    })
   // Internal nav select-option type
    $(document).on('change','.open-menu-select',function () {
        window.location.href = `${this.value}`;
        
    })

  });
   