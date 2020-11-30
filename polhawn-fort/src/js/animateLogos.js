function animateLogos() {
  var logos = $(".slideshow__logos > div");
  logos.show().addClass("fadeInBlur");
}

$(document).on("itemshown", ".js-slideshow", function () {
  setTimeout(function(){
    animateLogos();
  }, 1000)
});
