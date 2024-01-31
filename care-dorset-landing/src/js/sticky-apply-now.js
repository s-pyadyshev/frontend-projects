import ScrollMagic from 'scrollmagic';

$(document).ready(() => {
    if($('.js-sticky-apply-now').length > 0) {
        // .js-sticky-apply-now
        // .js-trigger-search-roles-theme
        let controller = new ScrollMagic.Controller();
        const $window = $(window);
        let windowWidth = $window.outerWidth();

        let stickyApplyNowInst = new ScrollMagic.Scene({
            triggerElement: '.js-trigger-apply-now-sticky',
            triggerHook: 0,
            offset: -320
        })
            .addTo(controller);

        const initStickyApplyNow = () => {
            if(windowWidth < 1250) {
                stickyApplyNowInst
                    .removePin(true)
                    .removeClassToggle(true);
            } else {
                stickyApplyNowInst
                    .setPin(".js-sticky-apply-now")
                    .setClassToggle('.js-sticky-apply-now', 'fixed');
            };
        };
        initStickyApplyNow();

        $window.resize(() => {
            windowWidth = $window.outerWidth();
            initStickyApplyNow();
        });
    }
});