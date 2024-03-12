export const mobileMenu = (() => {
  const init = () => {
    const mobileMenuOpen = document.querySelector(".js-open-menu");
    const menu = document.querySelector(".menu");
    const menuList = document.querySelector(".menu__list");

    if (!mobileMenuOpen) {
      return;
    }

    const mobileMenuClose = document.querySelector(".js-close-menu");
    const body = document.querySelector("body");

    mobileMenuOpen.addEventListener("click", function () {
      body.classList.toggle("menu-active");
      menu.classList.add("menu--open");
      menu.classList.remove("menu--closed");
      mobileMenuClose.focus();
    });

    mobileMenuClose.addEventListener("click", function () {
      body.classList.toggle("menu-active");
      menu.classList.add("menu--closed");
      menu.classList.remove("menu--open");
    });

    menuList.addEventListener("click", function (event) {
      if (event.target.closest(".menu__link")) {
        body.classList.toggle("menu-active");
        menu.classList.add("menu--closed");
        menu.classList.remove("menu--open");
      }
    });
  };

  return {
    init,
  };
})();
