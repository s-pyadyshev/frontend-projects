$(document).ready(function () {
  if ($(".popover").length) {
    const $popover = $(".popover");
    const $html = $("html");
    const $pageOverlay = $(".page-overlay");
    const $sortButton = $(".sort__button");
    const $popoverClose = $(".popover__close");

    const closePopover = () => {
      $popover.removeClass("is-active");
      $html.removeClass("no-scroll");
      $pageOverlay.removeClass("is-visible");
      $(".sort").removeClass("overlay");
    };

    $sortButton.on("click", function () {
      if ($popover.hasClass("is-active")) {
        closePopover();
      } else {
        $popover.addClass("is-active");
        $html.addClass("no-scroll");
        $(".sort").addClass("overlay");

        if ($(window).outerWidth() < 1024) {
          $pageOverlay.addClass("is-visible");
        }
      }
    });

    $popoverClose.on("click", function () {
      closePopover();
    });

    $(document).on("click", function (event) {
      if ($popover.hasClass("is-active")) {
        if (
          $popover.has(event.target).length == 0 &&
          !$popover.is(event.target) &&
          !$sortButton.is(event.target)
        ) {
          $popover.removeClass("is-active");
          $html.removeClass("no-scroll");
          $pageOverlay.removeClass("is-visible");
          $(".sort").removeClass("overlay");
        }
      }
    });
  }
});
