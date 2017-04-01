(function () {
    'use strict';

    angular
        .module('components')
        .component('titlebg', {
            templateUrl: 'components/Common/TitleBg/TitleBg.html',
            controller: 'titlebg'
        })
        .controller('titlebg', titlebg);


    function titlebg(){
        let $ctrl = this;

    }
})();