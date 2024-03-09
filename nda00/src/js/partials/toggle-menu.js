function toggleMenu() {
  var menuBtnOpen = document.querySelector(".js-open-menu");
  var menuBtnClose = document.querySelector(".js-close-menu");
  var menu = document.querySelector(".menu");
  var menuClose = document.querySelector(".menu__close");
  var menuWrapper = document.querySelector(".menu-wrapper");
  var headerBody = document.querySelector(".header__body");
  var body = document.querySelector("body");
  var bodyContainer = document.querySelector(".main-container");

  menu.style.top = headerBody.offsetHeight + "px";
  menuClose.style.top = "-" + headerBody.offsetHeight + "px";

  function openMenu() {
    menu.classList.add("is-active");
    headerBody.classList.add("is-menu-open");
    body.classList.add("is-menu-open");
    bodyContainer.classList.add("is-menu-open");
    menuWrapper.classList.add("is-menu-open");
  }

  function closeMenu() {
    menu.classList.remove("is-active");
    menuBtnOpen.classList.remove("is-hidden");
    headerBody.classList.remove("is-menu-open");
    body.classList.remove("is-menu-open");
    bodyContainer.classList.remove("is-menu-open");
    menuWrapper.classList.remove("is-menu-open");
  }

  menuBtnOpen.addEventListener("click", function() {
    openMenu();
  })

  menuBtnClose.addEventListener("click", function() {
    closeMenu();
  })

  document.onkeydown = function(event) {
    event = event || window.event;
    var isEscape = false;

    if ("key" in event) {
        isEscape = (event.key === "Escape" || event.key === "Esc");
    } else {
        isEscape = (event.keyCode === 27);
    }
    if (isEscape) {
      closeMenu();
    }
  };

  menuWrapper.addEventListener('click', function(event) {
    var isClickInside = menu.contains(event.target);
  
    if (!isClickInside) {
      closeMenu();
    }
  });
};
