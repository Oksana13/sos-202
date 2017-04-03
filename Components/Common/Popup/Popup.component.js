(function () {
    'use strict';

    angular
        .module('components')
        .controller('Popup', Popup);

    function Popup(HelpDataService, $scope) {
        // $scope.helpData = HelpDataService.getHelpData();
        $scope.helpData = 'test data';
    }
})();
