export function toggleStickyHeader() {
  var $body = $("body");
  var $header = $(".header");
  var $headerHeight = Math.round($header.height());
  var $windowScrollY = $(window).scrollTop();
  var $scrollProgress = $(".scroll-down-wrap");

  $(window).on("scroll", function () {
    var $windowScrollY = $(window).scrollTop();

    if ($windowScrollY > $headerHeight) {
      $header.addClass("header-sticky");

      if (!$body.hasClass("video-is-playing")) {
        $scrollProgress.addClass("is-hidden");
      }
    } else {
      $header.removeClass("header-sticky");
      if (!$body.hasClass("video-is-playing")) {
        $scrollProgress.removeClass("is-hidden");
      }
    }
  });

  if ($windowScrollY > $headerHeight) {
    $header.addClass("header-sticky");
  } else {
    $header.removeClass("header-sticky");
  }
}
