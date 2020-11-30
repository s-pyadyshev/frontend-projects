@@include('../../node_modules/swiper/dist/js/swiper.min.js');

$(document).ready(function(){
  @@include('uikit-icons.min.js');
  @@include('../../node_modules/choices.js/public/assets/scripts/choices.min.js');
  @@include('selectPricing.js');
  @@include('scrollSection.js');
  @@include('colorWord.js');
  @@include('slideshowCounter.js');
  @@include('slider-reviews.js');
  @@include('tabs.js');
  tabs.init();
  @@include('month-prices-slider.js');
  initMonthPricesSlider();
  @@include('dropdown.js');
  dropdown.init();
  @@include('animateLogos.js');
  @@include('headerScroll.js');
  headerScroll();
  @@include('triggerHamburger.js');
  @@include('wedding-filter-slider.js');
  @@include('gallery-slider.js');

  if($('.js-choose-date').length > 0) {
    $('.js-choose-date').daterangepicker({
      opens: 'center',
      minDate: moment(),
      singleDatePicker: true,
      isInvalidDate: function(date) {
        var nameDay = date.format('ddd');
        if(nameDay === 'Mon' || nameDay === 'Fri') {
          console.log(nameDay);
          return false;
        }

        return true;
      }
    });
  }

  if($(".js-check-brochure-label").length > 0) {

    $(".js-check-brochure-label").on('click', function(e) {
      $('.js-check-brochure').removeAttr('checked');

      setTimeout(function() {
        $(e.target).find('input').attr('checked', true);
      }, 400);
    });
  };

  if($('.js-toggle-input-search').length > 0) {
    $('.js-toggle-input-search').on('click', function() {
      var input = $(this).next();

      if(input.hasClass('active')) {
        input.removeClass('active');
      } else {
        input.addClass('active');
        input.focus();
      }
    });
  }

  if($('.js-to-next-section').length > 0) {
    $('.js-to-next-section').on('click', function() {
      var parent = $(this).closest('.js-parent-to-next-section');
      var target = parent.next();
      var offsetTop = target.offset().top;
      $('html, body').animate({
        scrollTop: offsetTop
      }, 600);
    })
  }
});
