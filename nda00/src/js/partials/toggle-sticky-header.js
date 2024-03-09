function toggleStickyHeader(scrollOffset) {
    var header = document.querySelector(".header");
    var headerLogo = document.querySelector(".header__logo");
    var logo = document.querySelector(".logo");
    var sectionLogo = document.querySelector(".section__logo");

    window.addEventListener("scroll", function () {
        var offset =
            (window.pageYOffset || document.documentElement.scrollTop) -
            (document.documentElement.clientTop || 0);

        if (offset > scrollOffset) {
            header.classList.add("is-fixed");
            headerLogo.appendChild(logo);
        }
    });

    window.removeEventListener("scroll", function () {});

    window.addEventListener("scroll", function () {
        var offset = window.pageYOffset || document.documentElement.scrollTop;

        if (offset < scrollOffset) {
            header.classList.remove("is-fixed");

            if (document.body.contains(sectionLogo)) {
                sectionLogo.appendChild(logo);
            }
        }
    });
}
