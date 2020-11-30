if($('.js-trigger-hamburger').length > 0) {
    var controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({triggerElement: ".js-trigger-hamburger", triggerHook: 'onEnter', offset: 100})
        .setClassToggle(".float-hamburger", "show")
        .addTo(controller);
}
