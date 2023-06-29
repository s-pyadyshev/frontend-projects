export const tabs = (function () {
  const init = function () {
    const $tabs = $("[data-tabs]");

    if (!$tabs.length) {
      return;
    }

    $tabs.each(function () {
      const $currentTab = $(this).data("tabs");
      const $tabButtons = $(this).find(".tab-button");

      $tabButtons.each(function () {
        $(this).on("click", function () {
          const matchingTabData = $(
            `[data-tabs-content="${$currentTab}"]`
          ).find(`[data-tab-content="${$(this).data("tab")}"]`);

          const activeTabContent = $(
            `[data-tabs-content="${$currentTab}"]`
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
  };

  return {
    init,
  };
})();
