'use strict';

angular.module('sos')
    
    .controller('MainCtrl', MainController);

function MainController($scope, ngDialog) {

    $scope.clickToOpen = function() {
        ngDialog.openConfirm({template: '../templates/main-modal.html',
            scope: $scope
        });
    };

}