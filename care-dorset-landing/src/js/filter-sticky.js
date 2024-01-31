import ScrollMagic from 'scrollmagic';

$(document).ready(() => {
    if($('.js-filter-sticky').length > 0) {
        let controller = new ScrollMagic.Controller();
        const $window = $(window);
        let windowWidth = $window.outerWidth();
        let duration = $('.job-listing__aside').height() - $('.js-filter-sticky').height();

        let filterStickyInstance = new ScrollMagic.Scene({
            triggerElement: '.js-filter-sticky',
            triggerHook: 0,
            offset: -110,
            duration: duration
        })
            .addTo(controller)
            .setPin(".js-filter-sticky");

        let offsetFilterTrigger = () => {
            if(windowWidth < 768) {
                filterStickyInstance.offset(-110);
                $(".job-listing__wrap").addClass("border-top");
            } else if(windowWidth >= 768 && windowWidth < 1024) {
                filterStickyInstance.offset(-129);
                $(".job-listing__wrap").removeClass("border-top");
            } else if(windowWidth >= 1024) {
                filterStickyInstance.offset(-159);
                $(".job-listing__wrap").css("padding-top", "20px");
            };
        }
        offsetFilterTrigger();
        $window.resize(() => {
            windowWidth = $window.outerWidth();
            duration = $('.job-listing__aside').height() - $('.js-filter-sticky').height();
            offsetFilterTrigger();
        });

        $('.search-roles').addClass('no-gradient');
    }
});