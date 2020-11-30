function slideshowCounter(slideshow) {

  var slideshowId = slideshow;

  function countActiveSlideNumber() {
    var slideshowCounterCurrentNav = parseInt($(slideshowId +  " .uk-slideshow-nav li.uk-active").attr("uk-slideshow-item")) + 1;
    var slideshowCounterCurrent = $(`${slideshowId}` + " " + ".slideshow__counter .slideshow__current");
  
    slideshowCounterCurrent.text("0" + slideshowCounterCurrentNav);
  }
  
  function countTotalSlidesNumber() {
    var slideshowCounterTotalNav = parseInt($(slideshowId + " .uk-slideshow-nav li:last-child").attr("uk-slideshow-item")) + 1;
    var slideshowCounterTotal = $(`${slideshowId}` + " " + ".slideshow__counter .slideshow__total");
  
    slideshowCounterTotal.text("0" + slideshowCounterTotalNav);
  }

  countActiveSlideNumber();
  countTotalSlidesNumber();
}

$(document).on('itemshow', ".js-slideshow", function () {
  slideshowCounter(".js-slideshow");
  $(".js-slideshow .slideshow__caption .uk-overflow-hidden > div").addClass("slideInLeft");
});
