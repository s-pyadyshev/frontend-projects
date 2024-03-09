export const scrollProgress = (percent) => {
  var progress = document.querySelector(".scroll-down-circle-progress");

  if (!progress) {
    return;
  }
  progress.style.strokeDashoffset = 100 - percent;
};
