export const initToggle = () => {
  const toggleButton = $("[data-toggle]");

  toggleButton.on("click", function () {
    const target = $(this).attr("data-toggle");

    $(`[data-toggle-target='${target}']`).fadeToggle(500);
  });
};
