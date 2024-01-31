$(document).ready(() => {
	if ($(".js-us-gallery").length > 0) {
		let usGallerySwiper = new Swiper(".js-us-gallery", {
            slidesPerView: 3,
            slidesPerGroup: 3,
			spaceBetween: 15,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 30,
				},
			},
		});
	}
});
