require("./vendor/fullpage.js");
import { scrollProgress } from "./scrollProgress";

export function initFullpage() {
  var video = document.querySelector("video");

  if (video === null) {
    return true;
  }

  const timestepsMap = {
    profile: {
      start: 0,
      stop: 11.9,
    },
    specs: {
      start: 11.95,
      stop: 27.9,
    },
    heat1: {
      start: 28.2,
      stop: 36,
    },
    heat2: {
      start: 36,
      stop: 47.5,
    },
    waterproof: {
      start: 48,
      stop: 57.15,
    },
    control: {
      start: 57.15,
      stop: 73.8,
    },
    "grow-light": {
      start: 73.8,
      stop: 88,
    },
  };

  var videoCurrentTime = 0;
  var currentSectionStopTime;

  video.addEventListener("timeupdate", function () {
    if (this.currentTime >= currentSectionStopTime) {
      this.pause();
    }
  });

  function setVideoPosition(currentIndex, prevIndex) {
    var sectionNameInViewport = $(".section-video.active").attr("id");

    if (sectionNameInViewport === undefined) return;

    currentSectionStopTime = timestepsMap[sectionNameInViewport].stop;
    videoCurrentTime = timestepsMap[sectionNameInViewport].start;

    const newSectionInViewport =
      timestepsMap[sectionNameInViewport].stop > videoCurrentTime;

    if (newSectionInViewport) {
      // skip 1st slide start time set to avoid video jumping
      if (currentIndex !== 1) {
        video.currentTime = timestepsMap[sectionNameInViewport].start;
      }
      // set 1st slide start time on back from 2nd slide
      if (prevIndex === 2) {
        video.currentTime = timestepsMap[sectionNameInViewport].start;
      }
      video.play();
    }
  }

  var $body = $("body");
  var $scrollDownProgressWrap = $(".scroll-down-wrap");
  var $scrollDownProgress = $(".scroll-down");
  var $header = $(".header");
  var $sectionVideoHeader = $(".section-video-header");
  var $backToTop = $(".back-to-top");
  var $getQuoteBtn = $(".get-quote");

  new fullpage("#fullpage", {
    fixedElements:
      ".get-quote-wrap, .header, .scroll-down-wrap, .section-video-header",
    verticalCentered: false,
    afterRender: function () {
      $getQuoteBtn.on("click", function (event) {
        event.preventDefault();
        fullpage_api.silentMoveTo($(".fp-section").length);
      });
    },
    afterLoad: function (origin, destination) {
      if (destination.index === 0) {
        $body.removeClass("video-is-playing");
        scrollProgress(100);
        $scrollDownProgressWrap.removeClass("to-bottom");
      }

      setVideoPosition(destination.index, origin.index);
    },
    onLeave: function (origin, destination) {
      // all sections except last
      if (destination.index + 1 !== $(".fp-section").length) {
        scrollProgress(
          destination.index * (100 / $(".fp-section.section-video").length)
        );

        var currentSectionHeaderContent = $(
          `.section-video-${destination.index}`
        ).html();

        $sectionVideoHeader.find(".section-header").removeClass("fadeIn");
        $sectionVideoHeader.empty().append(currentSectionHeaderContent);

        $sectionVideoHeader.find(".section-header").addClass("fadeIn");
        $scrollDownProgressWrap.addClass("to-bottom");
        $header.addClass("header-sticky");

        if (!$body.hasClass("video-is-playing")) {
          $body.addClass("video-is-playing");
        }
      }
      // last section (form + footer)
      if (destination.index + 1 === $(".fp-section").length) {
        $body.removeClass("video-is-playing");
        $scrollDownProgress.fadeOut();
        $header.addClass("transparent");

        if ($(window).innerWidth() < 767) {
          fullpage_api.setResponsive(true);
        }
      } else {
        $scrollDownProgress.fadeIn();
        $header.removeClass("transparent");

        if ($(window).innerWidth() < 767) {
          fullpage_api.setResponsive(false);
        }
      }
    },
  });

  $backToTop.on("click", function (event) {
    event.preventDefault();
    fullpage_api.silentMoveTo(1);
  });
}
