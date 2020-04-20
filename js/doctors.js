$(function () {
    

    $(document).on('click','.doctors-grid section a',function (e) {
        e.preventDefault();
         $(this).closest('section').find('.section-container').slideToggle();
        $(this).toggleClass('active-accordion-icon');

        
        
    })
    
})