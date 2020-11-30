import PerfectScrollbar from 'perfect-scrollbar';

$(document).ready(() => {
    if($('.js-mapbox-scroll').length > 0) {
        let mapboxScroll = new PerfectScrollbar('.js-mapbox-scroll', {
            minScrollbarLength: 20,
            maxScrollbarLength: 20,
            wheelPropagation: true,
            swipeEasing: false,
            suppressScrollX: true
        });
    }
});