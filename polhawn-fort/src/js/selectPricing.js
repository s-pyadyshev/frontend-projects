var element = document.getElementById("select-pricing");
var link = $(".select-pricing-link");

if ($("#select-pricing").length) {
  const choices = new Choices("#select-pricing", {
    searchEnabled: false,
    itemSelectText: "",
  });

  link.hide();

  element.addEventListener(
    'showDropdown',
    function(event) {
      link.show();
      $(".choices__list.choices__list--dropdown").append(link);
    }
  );

  element.addEventListener(
    'hideDropdown',
    function(event) {
      $(".choices__list .select-pricing-link").remove();
    }
  );
}

if($('.js-request-select').length > 0) {
  $('.js-request-select').each(function(ind, el) {
    const choices = new Choices(el, {
      searchEnabled: false,
      itemSelectText: "",
    });
  })
}