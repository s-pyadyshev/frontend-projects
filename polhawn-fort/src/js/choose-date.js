if ($(".js-choose-date").length > 0) {
  $(".js-choose-date").daterangepicker({
    autoUpdateInput: false,
    opens: "center",
    minDate: moment(),
    singleDatePicker: true,
    isInvalidDate: function(date) {
      var nameDay = date.format("ddd");
      if(nameDay === "Mon" || nameDay === "Fri") {
        return false;
      }
      return true;
    }
  });
}