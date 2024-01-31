$(document).ready(() => {

    if($('.js-representation-text').length > 0) {
        const $window = $(window);
        let windowWidth = $window.outerWidth();

        const init = () => {
            if(windowWidth < 768) {
                const height = $('.js-representation-text').outerHeight();
                $('.representation').css({ 'margin-bottom': height });
            } else {
                $('.representation').css({ 'margin-bottom': '' });
            };
        };
        init();

        $window.resize(() => {
            windowWidth = $window.outerWidth();
            init();
        });
    }
});