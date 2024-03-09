$(document).ready(function () {
  if ($(".sidebar-menu__close").length) {
    const $menu = $(".sidebar-menu");
    const $pageOverlay = $(".page-overlay");
    const $html = $("html");
    const $sort = $(".sort");

    const closeMenu = () => {
      if ($menu.attr("aria-hidden") === "false") {
        // if open
        $menu.attr("aria-hidden", "true");
        $html.removeClass("no-scroll");
        $pageOverlay.removeClass("is-visible");
        if ($(".header__search").hasClass("is-show")) {
          $pageOverlay.addClass("is-visible");
        }
      }
    };

    $(".sidebar-menu__close").on("click", function () {
      closeMenu();
      setTimeout(function () {
        $sort.css("z-index", "14");
      }, 500);
    });

    $(".header__hamburger").on("click", function () {
      if ($menu.attr("aria-hidden") === "true") {
        // if close
        $menu.attr("aria-hidden", "false");
        $pageOverlay.addClass("is-visible");
        $html.addClass("no-scroll");
        $sort.css("z-index", "11");
      }
    });

    $pageOverlay.on("click", function () {
      closeMenu();
    });
  }
});
