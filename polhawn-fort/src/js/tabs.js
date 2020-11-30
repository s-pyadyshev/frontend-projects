var tabs = (function () {
  var tabButtons = $(".tab-button");

  var isFirstTabActive = function () {
    var result = false;
    $(".tab-button").each(function (index) {
      if ($(this).hasClass("active") && index === 0) {
        result = true;
        return false;
      }
      return result;
    })
  }

  var isLastTabActive = function () {
    $(".tab-button").each(function (index) {
      if ($(this).hasClass("active") && index === $(".tab-button")[$(".tab-button").length - 1]) {
        return true;
      }
      return false;
    })
  }

  var init = function () {
    $(".tab-button").on("click", function (e) {
      $(this).addClass("active").next(".tab-content").addClass("active");
      $(this).siblings().removeClass("active");
    });
  };

  var nextTab = function () {
    var currentTab = $(".tab-button.active");
    // if (!currentTab.next().next(".tab-button")) {
    //     $(".tab-button:first-of-type").trigger("click")
    // }
    currentTab.next().next(".tab-button").trigger("click");
  }

  var prevTab = function () {
    var currentTab = $(".tab-button.active");
    // if (!currentTab.prev()) {
    //     $(".tab-button:last-of-type").trigger("click")
    // }
    currentTab.prev().prev(".tab-button").trigger("click");
  }

  var setFirstTab = function () {
    $(tabButtons[0]).trigger("click");
  }

  var setLastTab = function () {
    $(tabButtons[tabButtons.length - 1]).trigger("click");
  }

  $(".swiper-controls-desktop .swiper-button-next").on("click", function () {
    if (isLastTabActive()) {
      setFirstTab();
    }
    nextTab();
  })

  $(".swiper-controls-desktop .swiper-button-prev").on("click", function () {
    if (isFirstTabActive() == true) {
      setLastTab();
    }
    prevTab();
  })


  return {
    init: init,
    nextTab: nextTab,
    prevTab: prevTab,
    setFirstTab: setFirstTab,
    setLastTab: setLastTab,
    isFirstTabActive: isFirstTabActive,
    isLastTabActive: isLastTabActive
  };
})();
