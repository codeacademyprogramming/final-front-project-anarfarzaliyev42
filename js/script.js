$(function () {
  //Slider

  let timer;
  let counter = 1;
  let lengthOfSlider=$(".slider-container img").length;

  
  function sliderTimer() {
 
    
    // Line spans
    let allLineSpans = $(".line-span-container span");
    allLineSpans.each(function (index, element) {
      $(element).removeClass("line-span-active");
    });
    $($(".line-span-container span")[counter - 1]).addClass("line-span-active");
    // Bullets
    let allBulletPoints = $(".bullets div");
    allBulletPoints.each(function (index, element) {
      $(element).removeClass("active-bullet");
    });
    $($(".bullets div")[counter - 1]).addClass("active-bullet");

    //More about link
    let allMoreAboutLinks = $(".link a");

    allMoreAboutLinks.each(function (index, element) {
      $(element).removeClass("active-more-about-link");
    });
    $($(".link a")[counter - 1]).addClass("active-more-about-link");

    //Slider header

    let allHeaders = $(".header-container h2");
    allHeaders.each(function (index, element) {
      $(element).removeClass("active-slider-header");
    });
    $($(".header-container h2")[counter - 1]).addClass("active-slider-header");
    // Slider images
    let sliderImages = $(".slider-container img");
    sliderImages.each(function (index, element) {
      $(element).removeClass("active-slider-image");
    $(element).css({
        "animation-name": "none",
      });
    });

    $($(".slider-container img")[counter - 1])
      .addClass("active-slider-image")
      .css({
        "animation-name": "sliderScale",
      });
    if (counter == lengthOfSlider) {
      counter = 1;
    } else if (counter < lengthOfSlider) {
      counter++;
    }
    
  }

  timer = setInterval(sliderTimer, 5000);
  $(document).on('click','.bullets div',function () {
     let currentIndex= $(this).index();
      currentElement(currentIndex);
  })



  function currentElement(curretIndex) {

    let allLineSpans = $(".line-span-container span");
    allLineSpans.each(function (index, element) {
        $(element).removeClass("line-span-active");
      });
      $($(".line-span-container span")[curretIndex]).addClass("line-span-active");
    let allBulletPoints = $(".bullets div");
    allBulletPoints.each(function (index, element) {
        $(element).removeClass("active-bullet");
      });
      $($(".bullets div")[curretIndex]).addClass("active-bullet");
  
    let allMoreAboutLinks = $(".link a");
    
    allMoreAboutLinks.each(function (index, element) {
        $(element).removeClass("active-more-about-link");
      });
      $($(".link a")[curretIndex]).addClass("active-more-about-link");
      let allHeaders = $(".header-container h2");
    allHeaders.each(function (index, element) {
      $(element).removeClass("active-slider-header");
    });
    $($(".header-container h2")[curretIndex]).addClass("active-slider-header");
    let sliderImages = $(".slider-container img");
    sliderImages.each(function (index, element) {
      $(element).removeClass("active-slider-image");
    });

    $($(".slider-container img")[curretIndex])
      .addClass("active-slider-image")
      .css({
        "animation-name": "sliderScale",
      });
  }
  //   $(document).on('click','.bullets div',function () {
  //     let allBulletPoints=$('.bullets div');
  //     allBulletPoints.each(function(index, element) {
  //         $(element).removeClass("active-bullet");

  //       });
  //       $(this).addClass("active-bullet");
  //       sliderTimer();
  //   })

  
});
 