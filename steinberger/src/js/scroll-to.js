$(document).ready(function () {
  var $scrollToButton = $(".scroll-to");

  $scrollToButton.on("click", function (event) {
    event.preventDefault();

    $("html, body").animate(
      {
        scrollTop:
          $($(this).attr("href"))
            // plus header height + half of scrollTo height + shadow
            .offset().top -
          $(".header").height() +
          $(".scroll-to").height() / 2 +
          10,
      },
      500
    );
  });
});
