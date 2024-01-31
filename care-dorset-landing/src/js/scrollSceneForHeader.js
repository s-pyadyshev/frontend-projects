import ScrollMagic from "scrollmagic";

$(document).ready(() => {
	const elemToAddSceneToHeader = ".js-add-scene-for-header";
	const triggerToStartSceneHeader = ".js-trigger-to-start-scene-header";
	let controller = new ScrollMagic.Controller();
	const $window = $(window);
	let windowWidth = $window.outerWidth();

	// build scenes
	new ScrollMagic.Scene({
		triggerElement: triggerToStartSceneHeader,
		triggerHook: 0,
	})
		.setClassToggle(elemToAddSceneToHeader, "scroll-scene")
		.addTo(controller);

	// Scene for logo
	const $whiteLogo = $(".js-logo-white-for-scene");
	const $purpleLogo = $(".js-logo-purple-for-scene");

	const showPurpleLogo = () => {
		$whiteLogo.stop().fadeOut(150, () => {
			$purpleLogo.stop().fadeIn(150);
		});
	};

	const showWhiteLogo = () => {
		$purpleLogo.stop().fadeOut(150, () => {
			$whiteLogo.stop().fadeIn(150);
		});
	};

	new ScrollMagic.Scene({
		triggerElement: triggerToStartSceneHeader,
		triggerHook: 0,
	})
		.addTo(controller)
		.on("enter leave", (e) => {
			if (e.type === "enter") {
				showPurpleLogo();
			} else {
				showWhiteLogo();
			}
		});

	const offsetForSearch = () => {
		if (windowWidth < 1024) {
			instanceSearchRoles.offset(-59);
		} else {
			instanceSearchRoles.offset(-88);
		}
	};
	let instanceSearchRoles = new ScrollMagic.Scene({
		triggerElement: ".search-roles",
		triggerHook: 0,
		offset: -60,
	})
		.addTo(controller)
		.setPin(".search-roles")
		.setClassToggle(".search-roles", "fixed");

	offsetForSearch();
	$window.resize(() => {
		windowWidth = $window.outerWidth();
		offsetForSearch();
	});
});
