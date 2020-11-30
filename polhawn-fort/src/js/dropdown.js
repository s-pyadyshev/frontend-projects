var dropdown = (function () {
  var dropdownEl = ".dropdown";
  var dropdownToggle = ".dropdown__toggle";
  var dropdownContent = ".dropdown__content";
  var dropdownClose = ".dropdown__close";

  var init = function () {
    $(dropdownEl).each(function () {
      $(this).children(dropdownToggle).on("click", function () {
        $(this).next(dropdownContent).slideToggle(250);
        $(this).parent(dropdownEl).toggleClass("is-open");
      });

      $(this).find(dropdownClose).on("click", function () {
        $(this).parents(dropdownContent).slideToggle(250);
        $(this).parents(dropdownEl).toggleClass("is-open");
      });
    })
  };

  return {
    init: init
  };
})();
