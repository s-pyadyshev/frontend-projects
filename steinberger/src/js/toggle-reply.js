$(document).ready(function () {
  if ($(".comment").length) {
    $(".comment__reply-button").on("click", function () {
      const $this = $(this);

      if ($this.attr("aria-expanded") === "false") {
        $this.attr("aria-expanded", "true").fadeOut();
        $this.queue(function () {
          $this.next().stop().slideDown();
        });
      } else {
        $this.attr("aria-expanded", "false");
        $this.next().stop().slideUp();
      }
    });
  }
});
