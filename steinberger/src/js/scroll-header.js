$(document).ready(function () {
  if ($(".js-transparent").length) {
    const setStateHeader = () => {
      if ($(window).scrollTop() >= $(".header").height()) {
        $(".js-transparent").removeClass("header--transparent");
      } else {
        $(".js-transparent").addClass("header--transparent");
      }
    };

    setStateHeader();

    $(window).on("scroll", function () {
      setStateHeader();
    });
  }
});
