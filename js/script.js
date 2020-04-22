$(function () {
  //Slider

  let timer;
 
  let counter = 1;
  let lengthOfSlider = $(".slider-container img").length;
  // Slider first worked here
  sliderTimer();
  function sliderTimer() {
    slider();
  }

  // Slider worked by timer
  timer = setInterval(sliderTimer, 5000);
  // Slder waited and worked after bullet click
  $(document).on("click", ".bullets div", function () {
    clearInterval(timer);

    let currentIndex = $(this).index();
    counter = currentIndex + 1;
    slider();
    timer = setInterval(sliderTimer, 5000);
  
  
  });
  // Slider written here
  function slider() {
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

  // Main li animation
  addMainLIAnime();
  setTimeout(function () {
    $(".main-left-container li").css({
      "animation-name": "none",
      opacity: "1",
    });
  }, 2500);

  function addMainLIAnime() {
    $(".main-left-container li").css({
      "animation-name": "mainLiAnime",
    });
  }
});
