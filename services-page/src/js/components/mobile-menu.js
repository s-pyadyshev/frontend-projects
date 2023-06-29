export const mobileMenu = (function () {
  const init = function () {
    const $mobileMenuToggle = $(".js-toggle-menu");
    const $mobileMenuClose = $(".menu-toggle-close ");

    if (!$mobileMenuToggle.length) {
      return;
    }

    const $body = $("body");

    $mobileMenuToggle.on("click", function () {
      $body.toggleClass("mobile-menu-active");
      $mobileMenuClose.focus();
    });
  };

  return {
    init,
  };
})();
