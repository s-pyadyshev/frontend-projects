$(document).ready(function () {
  if ($(".header__search").length) {
    const $search = $(".header__search");
    const $pageOverlay = $(".page-overlay");
    const $html = $("html");
    let stateHeaderIsTransparent = false;
    const $header = $(".js-transparent");
    const $sort = $(".sort");

    const closeSearch = () => {
      $search.removeClass("is-show");
      $pageOverlay.removeClass("is-visible");
      $pageOverlay.css("z-index", "");
      $html.removeClass("no-scroll");

      if (stateHeaderIsTransparent) {
        $header.addClass("header--transparent");
      }
    };

    $(".header__icon--search").on("click", function () {
      if ($search.hasClass("is-show")) {
        closeSearch();
        setTimeout(function () {
          $sort.css("z-index", "14");
        }, 500);
      } else {
        $search.addClass("is-show");
        $pageOverlay.addClass("is-visible");
        $pageOverlay.css("z-index", "12");
        $html.addClass("no-scroll");
        $sort.css("z-index", "11");

        if ($header.hasClass("header--transparent")) {
          $header.removeClass("header--transparent");
          stateHeaderIsTransparent = true;
        } else {
          stateHeaderIsTransparent = false;
        }
      }
    });

    $(".header__search-close").on("click", function () {
      closeSearch();
      setTimeout(function () {
        $sort.css("z-index", "14");
      }, 500);
    });
  }
});
