$(function () {

    // Map area (Human body parts ) mouseover
  $(document).on("mouseover", "map area", function () {
    let imageSoruce = $(this).attr("data-src");
    let manOrWoman = $(this)
      .closest("map")
      .siblings(".mapped-image")
      .find("img");
    if ($(manOrWoman).attr("id") == "man") {
      $("#man").attr("src", `${imageSoruce}`);
    } else if ($(manOrWoman).attr("id") == "woman") {
      $("#woman").attr("src", `${imageSoruce}`);
    }
  });
  // Map area (Human body parts ) mouseleave
  $(document).on("mouseleave", "map area", function () {
    $("#man,#woman").attr("src", "assets/images/man_empty.png");
  });
  //Map areas data-tag attributes written here
  let checkSymptoms = true;
  $(document).on("click", "map area", function (e) {
    e.preventDefault();
    let currentDataTag = $(this).attr("data-tag");
    let allDataTags = $(".data-tags a");
    let allArticles=$('.symptoms-sugg-container .article');
    allArticles.each(function (index, element) {
      if ($(element).attr("data-tag") == currentDataTag) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
    
    allDataTags.each(function (index, element) {
      if ($(element).attr("data-tag") == currentDataTag) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });

    if (checkSymptoms) {
      $(".symptom-tags").toggle();
      $(".search-image-header .text").toggle();
      $(".search-image-header .search-input").toggle();
      $(".symptom-map").toggle();
      $(".search-image-header .search").toggleClass("search-icon");
      $(".search-image-header .search").toggleClass("man-icon");
      checkSymptoms = false;
    } else if (!checkSymptoms) {
      $(".symptom-tags").toggle();
      $(".search-image-header .text").toggle();
      $(".search-image-header .search-input").toggle();
      $(".symptom-map").toggle();
      $(".search-image-header .search").toggleClass("search-icon");
      $(".search-image-header .search").toggleClass("man-icon");
      checkSymptoms = true;
    }
  });
  //Search button written here
  $(document).on("click", ".search-image-header .search", function (e) {
    e.preventDefault();
    let currentDataTag='default';
    // Links
    let allDataTags = $(".data-tags a");
    allDataTags.each(function (index, element) {
      if ($(element).attr("class") =="default") {
        $(element).show();
      } else {
        $(element).hide();
      }
    });
    //Articles
    let allArticles=$('.symptoms-sugg-container .article');
    allArticles.each(function (index, element) {
  
        $(element).show();
      
    });

    if (checkSymptoms) {
      $(this).toggleClass("search-icon");
      $(this).toggleClass("man-icon");
      $(".symptom-tags").toggle();
      $(".search-image-header .text").toggle();
      $(".search-image-header .search-input").toggle();
      $(".symptom-map").toggle();
      checkSymptoms = false;
    } else if (!checkSymptoms) {
      $(this).toggleClass("search-icon");
      $(this).toggleClass("man-icon");
      $(".symptom-tags").toggle();
      $(".search-image-header .text").toggle();
      $(".search-image-header .search-input").toggle();
      $(".symptom-map").toggle();
      checkSymptoms = true;
    }
  });
  // Phone screen toggler
  $(document).on('click','.toggler-opener',function (e) {
    e.preventDefault();
    $('.toggle-symptoms').toggleClass("toggle-symptoms-active");
    $('.toggler-opener').toggleClass("toggler-opener-active");
    $('.toggler-container').toggleClass("toggler-container-active");
    
  })
  $(document).on("click",'.data-tags a, .toggle-symptoms-container a',function (e) {
    e.preventDefault();

    $(this).toggleClass("data-tags-link-active");
    let currentTag=$(this).attr("data-tag");
 
    
    let allArticles=$('.symptoms-sugg-container .article');
    allArticles.each(function (index,element) {
      if($(element).attr('data-tag')==currentTag){
        $(element).show();
      }
      else{
        $(element).hide();
      }
    })

    
    
    

  })
 
});
