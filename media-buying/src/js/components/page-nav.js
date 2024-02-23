export const pageNavFixed = (function () {
    const init = function () {
      const servicesHead = document.querySelector('.services-head'),
            sectionNav = document.querySelector('.page-nav');

      function fixedPageNav() {
        if (sectionNav.getBoundingClientRect().top <= 0) {
          sectionNav.style.position = 'fixed';
        }

        if (servicesHead.offsetTop + servicesHead.clientHeight >= window.scrollY) {
          sectionNav.style.position = 'absolute';
        }
      }

      fixedPageNav();

      window.addEventListener('scroll', function() {
        fixedPageNav();
      });
    }

    return {
      init
    };
  })();