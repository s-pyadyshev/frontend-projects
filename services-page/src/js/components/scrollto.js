import scrollToSmooth from "scrolltosmooth/dist/scrolltosmooth.esm";

export const smoothScroll = new scrollToSmooth("button", {
  targetAttribute: "data-scrollto",
  duration: 1000,
  durationRelative: false,
  durationMin: false,
  durationMax: false,
});

