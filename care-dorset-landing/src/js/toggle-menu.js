$(document).ready(() => {
    let $toggleMenu = $('.js-toggle-menu');

    if($toggleMenu.length > 0) {
        let $body = $('body'),
            nameClassForOpenMenu = 'menu-open',
            $window = $(window),
            positionScroll = 0;
            // $mobileMenu = $('.js-mobile-menu'),
            // $nav = $('.js-nav'),
            // windowWidth = $window.outerWidth(),
            // breakpoint = 576;

        const openMenu = () => {
            positionScroll = $window.scrollTop();
            $body.addClass(nameClassForOpenMenu);
            $('.page-wrapper').scrollTop(positionScroll);
        };

        const closeMenu = () => {
            $body.removeClass(nameClassForOpenMenu);
            $window.scrollTop(positionScroll);
        };

        $toggleMenu.on('click', (event) => {
            event.preventDefault();

            $body.hasClass(nameClassForOpenMenu)
                ? closeMenu()
                : openMenu();
        });
    }
});