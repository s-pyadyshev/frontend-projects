export function initAccordion() {
  var $accordionButtons = $("[data-accordion]");

  if (!$accordionButtons.length) {
    return;
  }
  $accordionButtons.each(function () {
    $(this).on("click", function () {
      var target = $(this).parent().next();
      $(this).parent().parent().parent(".card").toggleClass("is-open");
      target.fadeToggle(250);
    });
  });
}
