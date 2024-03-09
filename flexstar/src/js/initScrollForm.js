function debounce(method, delay) {
  clearTimeout(method._tId);
  method._tId = setTimeout(function () {
    method();
  }, delay);
}

export function initScrollForm() {
  var getQuoteButton = document.querySelector(".get-quote-wrap");
  // var scrollDown = document.querySelector(".scroll-down-wrap");

  if (!getQuoteButton) {
    return;
  }

  var hideOnCollision = (element, classname) =>
    element.classList.add(classname);
  var showOutOfCollision = (element, classname) =>
    element.classList.remove(classname);

  function handleScrollForm() {
    var topOfElement = $(".section-contact-form").offset().top;
    var bottomOfElement =
      $(".section-contact-form").offset().top +
      $(".section-contact-form").outerHeight();
    var bottomOfScreen = $(window).scrollTop() + $(window).innerHeight();
    var topOfScreen = $(window).scrollTop();

    if (bottomOfScreen > topOfElement && topOfScreen < bottomOfElement) {
      hideOnCollision(getQuoteButton, "is-hidden");
      // hideOnCollision(scrollDown, "is-hidden");
    } else {
      showOutOfCollision(getQuoteButton, "is-hidden");
      // showOutOfCollision(scrollDown, "is-hidden");
    }
  }

  window.addEventListener("scroll", () => {
    debounce(handleScrollForm, 200);
  });
}
