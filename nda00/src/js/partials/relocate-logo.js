function relocateLogo() {
    var logo = document.querySelector(".logo");
    var sectionLogo = document.querySelector(".section__logo");

    if (document.body.contains(sectionLogo)) {
        sectionLogo.appendChild(logo);
    }
}