import '@babel/polyfill';
import svg4everybody from 'svg4everybody';
import $ from 'jquery';

svg4everybody();

window.$ = $;
window.jQuery = $;

require('ninelines-ua-parser');

import 'uikit/dist/js/uikit';
// import 'scrollmagic/scrollmagic/uncompressed/plugins/jquery.ScrollMagic';
// import 'scrollmagic/scrollmagic/uncompressed/ScrollMagic';
// import 'swiper';
