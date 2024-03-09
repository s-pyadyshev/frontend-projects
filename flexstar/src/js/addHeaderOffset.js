export function addHeaderOffset() {
  var headerHeight = Math.ceil($(".header").innerHeight());
  var video = $(".video");
  var contactForm = $(".section-contact-form");

  video.css("padding-top", headerHeight);
  contactForm.css("padding-top", headerHeight);
}

$(window).on("resize", function () {
  addHeaderOffset();
});
