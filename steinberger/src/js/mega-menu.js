$(document).ready(function () {
  $(".header").hide();
  $(".mega-menu").show();

  $(".mega-menu__nav-item").hover(
    function () {
      if ($(this).find(".mega-submenu").length) {
        $(".page-overlay").addClass("is-visible");
        $(".sort").css("z-index", "12");
      }
    },
    function () {
      $(".page-overlay").removeClass("is-visible");
    }
  );

  if ($(".sidebar-menu__close").length) {
    const $menu = $(".js-sidebar-secondary");
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
      $(".mega-menu__nav").hide();
    });

    $(".mega-menu__hamburger").on("click", function () {
      if ($menu.attr("aria-hidden") === "true") {
        // if close
        $menu.attr("aria-hidden", "false");
        $pageOverlay.addClass("is-visible");
        $html.addClass("no-scroll");
        $sort.css("z-index", "11");
      }
      if (!$(".sidebar-menu__nav .mega-menu__nav").length) {
        $(".mega-menu__nav").appendTo(".sidebar-menu__nav");
      }
      $(".mega-menu__nav").show();
    });

    $(document).on("click", ".sidebar-menu__plus", function () {
      if ($(this).parent(".mega-menu__nav-item").hasClass("is-active")) {
        $(this).parent(".mega-menu__nav-item").removeClass("is-active");
      } else {
        $(".mega-menu__nav-item").removeClass("is-active");
        $(this).parent(".mega-menu__nav-item").addClass("is-active");
      }
    });

    $pageOverlay.on("click", function () {
      closeMenu();
    });
  }
});
