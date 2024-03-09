@@include('partials/svg.js');
@@include('partials/toggle-menu.js');
@@include('partials/toggle-sticky-header.js');
@@include('partials/relocate-logo.js');

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('svg-sprite').innerHTML = SVG_SPRITE;
  toggleMenu();
  toggleStickyHeader(200);
  relocateLogo();
});
