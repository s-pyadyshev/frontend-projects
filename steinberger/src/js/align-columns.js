$(document).ready(function () {
  if ($(".ingredients__list").length) {
    var listLength = $(".ingredients__list li").length;
    var leftColumn = $(".ingredients__list li").slice(
      0,
      Math.round(listLength / 2)
    );

    leftColumn.each(function () {
      $(this).css("text-align", "right");
    });
  }
});
