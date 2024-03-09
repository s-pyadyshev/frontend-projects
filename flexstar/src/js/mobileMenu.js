export function initMobileMenu() {
  var $body = $("body");
  var $mobileMenu = $(".js-menu-toggle");
  var $pageWrapper = $(".page-wrapper");

  $mobileMenu.on("click", function () {
    $body.toggleClass("mobile-menu-active");
    $pageWrapper.removeClass("has-overlay");
  });
}
