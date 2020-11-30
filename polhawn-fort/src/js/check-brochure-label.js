if ($(".js-check-brochure-label").length > 0) {

  $(".js-check-brochure-label").on('click', function(e) {
    $('.js-check-brochure').removeAttr('checked');

    setTimeout(function() {
      $(e.target).find('input').attr('checked', true);
    }, 400);
  });
};