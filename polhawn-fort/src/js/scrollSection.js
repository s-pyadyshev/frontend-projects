if (!!$('.js-section-scroll-trigger').length) {
  function initScrollSection() {
    // global setting for scenes
    var controllerScrollSection = new ScrollMagic.Controller({
      globalSceneOptions: {
        duration: "100%"
      }
    });

    // get all sections
    var sections = $('.js-section-scroll-trigger');

    // create scene for every section
    for (var i=0; i < sections.length; i++) {
      var mainSection = $(sections[i]);
      var img = $(mainSection).find('.section-advert__image');
      var sectionAdvert = $(mainSection).find('.section-advert');

      new ScrollMagic.Scene({
        triggerHook: 'onEnter',
        triggerElement: sections[i],
        duration: '100%'
      })
      .setTween(img, {
        scale: 1
      })
      .addTo(controllerScrollSection);

      new ScrollMagic.Scene({
        triggerElement: sections[i],
        duration: '100%'
      })
      .setClassToggle(`.js-get-section[href^="#${mainSection.attr('id')}"]`, 'active')
      .addTo(controllerScrollSection);

      new ScrollMagic.Scene({
        triggerHook: 'onLeave',
        triggerElement: sections[i],
        offset: 150
      })
      .setTween(sectionAdvert, {
        y: 200,
        opacity: 0,
        duration: '100%'
      })
      .addTo(controllerScrollSection);
    };

    controllerScrollSection.scrollTo(function (newpos) {
      TweenMax.to(window, 0.5, {scrollTo: {y: newpos}});
    });

    //  bind scroll to anchor links
    $(document).on("click", ".js-get-section[href^='#']", function (e) {
      var id = $(this).attr("href");
      if ($(id).length > 0) {
        e.preventDefault();

        // trigger scroll
        controllerScrollSection.scrollTo(id);

          // if supported by the browser we can even update the URL.
        if (window.history && window.history.pushState) {
          history.pushState("", document.title, id);
        }
      }
    });

    // destroy for mobile
    var breakpointDestroy = 768;
    var windowWidth = $(window).width();
    var isMobile = false;

    $(window).resize(function() {
      windowWidth = $(window).width();
    });

    function updateScrollSection() {
      if(windowWidth < breakpointDestroy && !isMobile) {
        isMobile = true;
        controllerScrollSection.destroy(true);
      } else if(windowWidth >= breakpointDestroy && isMobile) {
        isMobile = false;
        initScrollSection();
      }
    }
    updateScrollSection();

    $(window).resize(function() {
      updateScrollSection();
    });
  }

  initScrollSection();
}

if($('.main__section-advert').length > 0) {
  var heightTrigger = $('.main__section-advert').height();
  var heightWindow = $(window).height();

  var controllerDots = new ScrollMagic.Controller({
    globalSceneOptions: {
      duration: parseInt(heightTrigger) - (heightWindow / 2)
    }
  });

  var scene = new ScrollMagic.Scene({
    triggerElement: ".main__section-advert",
    duration: parseInt(heightTrigger) - (heightWindow / 2)
  })
    .setPin(".main__section-dots")
    .addTo(controllerDots);

  var controllerDotsPadding = new ScrollMagic.Controller({
    globalSceneOptions: {
      duration: heightWindow / 2
    }
  });

  new ScrollMagic.Scene({
    triggerElement: ".main__section-advert",
    duration: heightWindow / 2
  })
    .setTween(".main__section-dots", 0.1, {
      paddingTop: 0,
      paddingBottom: 0
    })
    .addTo(controllerDotsPadding);
}
