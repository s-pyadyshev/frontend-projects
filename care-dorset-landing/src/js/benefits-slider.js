$(document).ready(() => {
    if($('.js-benefits-slider').length > 0) {
        let benefitsSwiper = new Swiper ('.js-benefits-slider', {
            loop: true,
            spaceBetween: 15,
            centeredSlides: true,
            slidesPerView: 3,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 4,
                    spaceBetween: 15,
                    centeredSlides: true
                },

                1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                    centeredSlides: false
                }
            }
        });
    }
});