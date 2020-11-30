$(document).ready(() => {
	const $toggleDropdown = $(".js-toggle-dropdown");

	if ($toggleDropdown.length > 0) {
		const stateClass = "open-dropdown";
		const $window = $(window);
		let windowWidth = $window.outerWidth();
		const breakpoint = 768;
		const animTime = 300;

		const openDropdown = (el) => {
			el.addClass(stateClass);
			el.next().stop().slideDown(animTime);
		};

		const closeDropdown = (el) => {
			el.removeClass(stateClass);
			el.next().stop().slideUp(animTime);
		};

		// Init dropdown state for mobile
		if (windowWidth < breakpoint) {
			closeDropdown($toggleDropdown);
		}

		$window.resize(() => {
			if (
				windowWidth !== $window.outerWidth() &&
				$window.outerWidth() >= breakpoint
			) {
				openDropdown($toggleDropdown);
				$toggleDropdown.next().stop().height("");
				windowWidth = $window.outerWidth();
			} else if (
				windowWidth !== $window.outerWidth() &&
				$window.outerWidth() < breakpoint
			) {
				closeDropdown($toggleDropdown);
				windowWidth = $window.outerWidth();
			} else {
				windowWidth = $window.outerWidth();
			}
		});

		$toggleDropdown.on("click", function () {
			if (windowWidth < breakpoint) {
				let $this = $(this);

				if ($this.hasClass(stateClass)) {
					closeDropdown($this);
				} else {
					openDropdown($this);
				}
			}
		});
	}
});

$(document).ready(() => {
	const $dropdown = $(".js-dropdown");

	if ($dropdown.length) {
		const stateClass = "is-open";
		const $window = $(window);
		let windowWidth = $window.outerWidth();
		const animTime = 300;

		const openDropdown = (el) => {
			el.next().stop().slideDown(animTime);
			el.parent().addClass(stateClass);
		};

		const closeDropdown = (el) => {
			el.next().stop().slideUp(animTime);
			el.parent().removeClass(stateClass);
		};

		$dropdown.children(".dropdown__title").on("click", function () {
			let $this = $(this);

			if ($this.parent().hasClass(stateClass)) {
				closeDropdown($this);
			} else {
				openDropdown($this);
			}
		});
	}
});
