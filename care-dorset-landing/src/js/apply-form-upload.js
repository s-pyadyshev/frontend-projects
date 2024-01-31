// var bar = document.getElementById('js-progressbar');
import UIkit from 'uikit/dist/js/uikit';

$(document).ready(() => {
    UIkit.upload('.js-upload', {
        url: '',
        multiple: true,

        beforeSend: function (environment) {
            console.log('beforeSend', arguments);

            // The environment object can still be modified here. 
            // var {data, method, headers, xhr, responseType} = environment;

        },
        beforeAll: function () {
            console.log('beforeAll', arguments);
        },
        load: function () {
            console.log('load', arguments);
        },
        error: function () {
            console.log('error', arguments);
        },
        complete: function () {
            console.log('complete', arguments);
        },

        loadStart: function (e) {
            console.log('loadStart', arguments);
        },

        progress: function (e) {
            console.log('progress', arguments);
        },

        loadEnd: function (e) {
            console.log('loadEnd', arguments);
        },

        completeAll: function () {
            console.log('completeAll', arguments);

            alert('Upload Completed');
        }
    })
})