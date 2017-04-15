(function () {
    'use strict';

    angular
        .module('components')
        .component('titlebg', {
            templateUrl: 'Components/Common/TitleBg/TitleBg.html',
            controller: 'titlebg',
            bindings: {
                fill: '<'
            }
        })
        .controller('titlebg', titlebg);


    function titlebg(){
        let $ctrl = this;

    }
})();