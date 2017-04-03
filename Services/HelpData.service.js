(function () {
    'use strict';

    angular.module('app')
        .service('HelpDataService', HelpDataService);

    function HelpDataService($http) {
        let $ctrl = this;

        function getHelpData() {
            console.log('getHelpData');
        }

    }
})();