import Swiper from "swiper";
import { Pagination, Mousewheel, Keyboard } from "swiper/modules";

export const jobSlider = (function () {
  const init = function () {
    const jobSwiperElement = document.querySelector(".job-swiper");
    if (!jobSwiperElement) {
      return;
    }

    const jobSwiper = new Swiper(".job-swiper", {
      modules: [Pagination, Mousewheel, Keyboard],
      spaceBetween: 20,
      slidesPerView: "auto",
      centeredSlides: "auto",
      breakpoints: {
        1025: {
          spaceBetween: 30,
          freeMode: {
            enabled: true,
            sticky: false,
            momentumBounce: false,
          },
          mousewheel: {
            eventsTarget: ".job-slider",
          },
        },
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
        clickable: true,
      },
      keyboard: {
        enabled: true,
      },
    });

    const observerOptions = {
      root: null,
      threshold: 1,
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    const swiperContainer = document.querySelector(".job-slider");
    observer.observe(swiperContainer);

    function handleIntersection(entries, _observer) {
      if (entries[0].isIntersecting === true)
        if (!jobSwiper.isEnd || !jobSwiper.isBeginning) {
          jobSwiper.mousewheel.enable();
        }
    }

    jobSwiper.on("reachEnd", function () {
      jobSwiper.mousewheel.disable();
      if (
        window.innerWidth < 768 &&
        jobSwiper.activeIndex + 1 === jobSwiper.slides.length - 1
      ) {
        setTimeout(() => {
          jobSwiper.setTranslate(jobSwiper.getTranslate() + -170);
        }, 500);
      }
    });

    jobSwiper.on("reachBeginning", function () {
      jobSwiper.mousewheel.disable();
    });

    const currentFraction = document.querySelector(".swiper-fraction-current");
    const totalFraction = document.querySelector(".swiper-fraction-total");

    if (jobSwiper.slides.length >= 10) {
      totalFraction.textContent = jobSwiper.slides.length - 1;
      currentFraction.textContent =
        "0" + (jobSwiper.activeIndex + 1).toString();
    } else {
      totalFraction.textContent = `0${jobSwiper.slides.length}`;
      currentFraction.textContent =
        "0" + (jobSwiper.activeIndex + 1).toString();
    }

    jobSwiper.on("slideChange", function () {
      if (
        jobSwiper.activeIndex === 0 ||
        jobSwiper.activeIndex + 1 >= jobSwiper.slides.length - 1
      )
        if (jobSwiper.slides.length >= 10) {
          currentFraction.textContent = "0" + jobSwiper.activeIndex.toString();

          if (jobSwiper.activeIndex + 1 >= 10) {
            let arrCurrentFraction = [];
            arrCurrentFraction = currentFraction.textContent.split("");
            arrCurrentFraction.shift();
            currentFraction.textContent = arrCurrentFraction.join("");
          }
        } else {
          currentFraction.textContent =
            "0" + (jobSwiper.activeIndex + 1).toString();
        }

      if (currentFraction.textContent == totalFraction.textContent) {
        currentFraction.classList.add("disabled");
      } else {
        currentFraction.classList.remove("disabled");
      }
    });
  };

  return {
    init,
  };
})();
