import Swiper from "swiper";
import { Pagination, Grid } from "swiper/modules";

$(function () {
  if ($(".counter-value").length) {
    $.fn.isInViewport = function () {
      var elementTop = $(this).offset().top;
      var elementBottom = elementTop + $(this).outerHeight();
      var viewportTop = $(window).scrollTop();
      var viewportBottom = viewportTop + $(window).height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    };
  
    var isCounterInView = false;
    var isCounterAnimated = false;
    var originalDigits = [];
    $(".counter-value").each(function (i, el) {
      originalDigits.push($(this).text());
    });
  
    var animateDigits = function animateDigits() {
      $(".counter-value").each(function (i, el) {
        var data = parseInt(this.dataset.count, 10);
        var props = {
          from: {
            count: 0,
          },
          to: {
            count: data,
          },
        };
        $(props.from).animate(props.to, {
          duration: 1500 * 1,
          step: function (now) {
            $(el).text(Math.ceil(now));
          },
          complete: function () {
            $(el).text(originalDigits[i]);
          },
        });
      });
    };
  
    var reset = function reset() {
      if ($(".counter-value").isInViewport()) {
        isCounterInView = true;
      } else {
        isCounterInView = false;
        isCounterAnimated = false;
      }
  
      if (
        isCounterInView &&
        $(".counter-value").isInViewport() &&
        isCounterAnimated === false
      ) {
        animateDigits();
        isCounterAnimated = true;
      }
    };
  
    $(window).on("scroll", reset);
  }

  const buttons = document.querySelectorAll(".page-header__buttons button");
  const headerImage = document.querySelector(".page-header");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => {
        btn.classList.remove("active");
      });

      button.classList.add("active");

      const dataImage = button.getAttribute("data-image");

      headerImage.className = `page-header ${dataImage}`;
    });
  });

  const swiper = new Swiper(".js-signature-slider", {
    modules: [Pagination, Grid],
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        allowTouchMove: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: true,
        },
      },
      1366: {
        slidesPerView: 3,
        grid: {
          rows: 2,
          fill: "row",
        },
        spaceBetween: 30,
        allowTouchMove: false,
        pagination: false,
      },
    },
  });

  const links = document.querySelectorAll(".js-scroll");

  links.forEach(function (elem) {
    elem.addEventListener("click", smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    const link = this.getAttribute("data-href");

    const offsetTop = document.querySelector(link).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
});
