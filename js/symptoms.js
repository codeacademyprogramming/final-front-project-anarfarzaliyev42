$(function () {

  // $(document).on('mouseover','.man map area',function () {
  //      let imageSoruce=$(this).attr('data-src');
  //     $('#man').attr('src',`${imageSoruce}`);

  // })
  // $(document).on('mouseleave','.man map area',function () {

  //     $('#man').attr('src','assets/images/man_empty.png');

  // })
  // $(document).on('mouseover','.woman map area',function () {
  //      let imageSoruce=$(this).attr('data-src');
  //     $('#woman').attr('src',`${imageSoruce}`);

  // })
  // $(document).on('mouseleave','.woman map area',function () {

  //     $('#woman').attr('src','assets/images/man_empty.png');

  // })

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
  $(document).on("mouseleave", "map area", function () {
    $("#man,#woman").attr("src", "assets/images/man_empty.png");
  });
  let checkSymptoms = true;
  $(document).on("click", "map area", function (e) {
    e.preventDefault();
    let currentDataTag = $(this).attr("data-tag");
    let allDataTags = $(".data-tags a");
    allDataTags.each(function (index, element) {
      if ($(element).attr("data-tag") == currentDataTag) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });

    if (checkSymptoms) {
      $(".simptom-tags").toggle();
      $(".search-image-header .text").toggle();
      $(".search-image-header .search-input").toggle();
      $(".symptom-map").toggle();
      $(".search-image-header .search").toggleClass("search-icon");
      $(".search-image-header .search").toggleClass("man-icon");
      checkSymptoms = false;
    } else if (!checkSymptoms) {
      $(".simptom-tags").toggle();
      $(".search-image-header .text").toggle();
      $(".search-image-header .search-input").toggle();
      $(".symptom-map").toggle();
      $(".search-image-header .search").toggleClass("search-icon");
      $(".search-image-header .search").toggleClass("man-icon");
      checkSymptoms = true;
    }
  });
  $(document).on("click", ".search-image-header .search", function (e) {
    e.preventDefault();
    let currentDataTag='default';
    let allDataTags = $(".data-tags a");
    allDataTags.each(function (index, element) {
      if ($(element).attr("data-tag") == currentDataTag) {
        $(element).show();
      } else {
        $(element).hide();
      }
    });

    if (checkSymptoms) {
      $(this).toggleClass("search-icon");
      $(this).toggleClass("man-icon");
      $(".simptom-tags").toggle();
      $(".search-image-header .text").toggle();
      $(".search-image-header .search-input").toggle();
      $(".symptom-map").toggle();
      checkSymptoms = false;
    } else if (!checkSymptoms) {
      $(this).toggleClass("search-icon");
      $(this).toggleClass("man-icon");
      $(".simptom-tags").toggle();
      $(".search-image-header .text").toggle();
      $(".search-image-header .search-input").toggle();
      $(".symptom-map").toggle();
      checkSymptoms = true;
    }
  });
});
