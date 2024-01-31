$(document).ready(() => {
	if ($(".js-passion-inside-slider").length > 0) {
		let passionInsideSwiper = new Swiper(".js-passion-inside-slider", {
			loop: true,
			spaceBetween: 15,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}
});
// .js-passion-inside-slider
