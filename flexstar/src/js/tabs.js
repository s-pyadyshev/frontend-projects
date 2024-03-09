export function initTabs() {
  var $tabs = $("[data-tabs]");

  $tabs.each(function () {
    var $currentTab = $(this).data("tabs");
    var $tabButtons = $(this).find(".tab-button");

    $tabButtons.each(function () {
      $(this).on("click", function () {
        var matchingTabData = $(
          '[data-tabs-content="' + $currentTab + '"]'
        ).find('[data-tab-content="' + $(this).data("tab") + '"]');

        var activeTabContent = $(
          '[data-tabs-content="' + $currentTab + '"]'
        ).find("[data-tab-content].is-active");

        activeTabContent.removeClass("is-active");
        $(`[data-tabs=${$currentTab}]`)
          .find(".tab-button")
          .removeClass("is-active");
        matchingTabData.addClass("is-active");
        $(`[data-tabs=${$currentTab}]`)
          .find(`.tab-button[data-tab=${$(this).data("tab")}]`)
          .addClass("is-active");
      });
    });
  });
}
