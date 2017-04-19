(function () {
    'use strict';

    angular
        .module('components')
        .controller('Popup', Popup);

    function Popup($scope) {
        $scope.helpData = 'test data';

        let $ctrl = this;

        $scope.$onInit = function () {
            console.log('popup');
        }
    }
})();
