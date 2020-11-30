$(document).ready(() => {
    if($('.js-link-back-page').length > 0) {
        const breakpoint = '1024';
        const $window = $(window);
        const $linkBackPage = $('.js-link-back-page');
        // e.prepend(s) — добавит s первым в e
        const moveLink = () => {
            let windowWidth = $window.outerWidth();
            if(windowWidth < breakpoint) { // mobile
                $('.js-link-back-place-mobile').prepend($linkBackPage);
            } else { // desktop
                $('.js-link-back-place-desktop').prepend($linkBackPage);
            }
        };
        moveLink();

        $window.resize(() => {
            moveLink();
        });
    }
});