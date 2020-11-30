function headerScroll() {
  var header = $('.header'),
    hamburger = $('.menu__toggle-open'),
    hamburgerIcon = hamburger.find('.uk-icon'),
    breakpointScrollHeader = $(".header").height(),
    social = $('.header__social').find('.social__icon'),
    logo = $('.header__logo');

  $(window).scroll(function () {
    var $this = $(this);

    if ($this.width() >= 768) {
      var positionSrollWindow = $this.scrollTop();

      if (positionSrollWindow >= breakpointScrollHeader) {
        header.css({
          backgroundColor: '#fff',
          boxShadow: "0 -10px 20px rgba(0, 0, 0, 0.5)"
        })

        hamburger.css({
          backgroundColor: '#30b298',
        })

        social.css({
          color: '#3b8a80'
        })

        hamburgerIcon.css({
          color: '#fff'
        })

        logo.addClass('show');
      } else {
        header.css({
          backgroundColor: '',
          boxShadow: ''
        })

        hamburger.css({
          backgroundColor: ''
        })

        social.css({
          color: ''
        })

        hamburgerIcon.css({
          color: ''
        })

        logo.removeClass('show')
      }
    }
  });

  $(window).resize(function () {
    if ($(this).width() < 768) {
      logo.show();
      header.css({
        backgroundColor: ''
      })

      hamburger.css({
        backgroundColor: ''
      })

      social.css({
        color: ''
      })

      hamburgerIcon.css({
        color: ''
      })
    }
  })

  $(document).on('shown', ".js-toggle-menu", function () {
    header.css({
      backgroundColor: '',
      boxShadow: ''
    })
  });

  $(document).on('hidden', ".js-toggle-menu", function () {
    if (window.pageYOffset >= $(".header").height()) {
      header.css({
        backgroundColor: '#fff',
        boxShadow: "0 -10px 20px rgba(0, 0, 0, 0.5)"
      })
    }
  });
}
