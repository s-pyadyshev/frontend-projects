if($('.js-color-word').length > 0) {

    var apocurelem = $('.js-color-word').find('h3');
    var apolet = apocurelem.text().split('');

    for(var i in apolet) {
        apolet[i] = '<span>' + apolet[i] + '</span>';
    };

    var text = apolet.join("");
    apocurelem.html(text);

    var apocolorarr = [
        '#6d7732',
        '#be9067',
        '#a1bd6c',
        '#ad6090',
        '#b2914f',
        '#505b23',
        '#379b9b',
        '#9da56a',
        '#afac3a',
        '#9a9e7e',
        '#6f9e73'
    ];

    var min = 0;
    var max = apocolorarr.length - 1;
    var aporandom = 0;
    $('.js-color-word h3 span').each(function(index) {
        $(this).css('color', apocolorarr[aporandom]);
        aporandom++;
        if(aporandom > max) {
            aporandom = 0
        };
    });
}