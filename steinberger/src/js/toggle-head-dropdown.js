$(document).ready(function () {
  if ($(".js-head-dropdown").length) {
    const $toggle = $(".js-toggle-head-dropdown");
    const $dropdown = $(".js-head-dropdown");

    $toggle.mouseover(function () {
      $dropdown.attr("aria-hidden", "true");
      $(this).next().attr("aria-hidden", "false");
    });

    $(".header__wrap").mouseleave(function () {
      $dropdown.attr("aria-hidden", "true");
    });
  }
});
