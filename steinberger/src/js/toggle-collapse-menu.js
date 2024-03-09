$(document).ready(function () {
  if ($(".sidebar-menu__plus").length) {
    $(".sidebar-menu__link").attr("aria-expanded", "false");
    $(".sidebar-menu__link").next().stop().slideUp();

    $(".sidebar-menu__link").on("click", function (e) {
      if($(e.target).hasClass('sidebar-menu__plus')) {
        e.preventDefault();

        const $this = $(this);

        if ($this.attr("aria-expanded") === "false") {
          $this.attr("aria-expanded", "true");
          $this.next().stop().slideDown();
        } else {
          $this.attr("aria-expanded", "false");
          $this.next().stop().slideUp();
        }
      };
    });
  }
});
