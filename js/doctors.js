$(function () {
    
    //Doctors accordion written here
    $(document).on('click','.doctors-container .accordion a',function (e) {
        e.preventDefault();
         $(this).closest('.accordion').find('.accordion-container').slideToggle();
        $(this).toggleClass('active-accordion-icon');

        
        
    })
    
})