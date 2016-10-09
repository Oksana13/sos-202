'use strict';

angular.module('app')

    .controller('MainCtrl', MainController);

// MainController.$inject = ['ngDialog'];

function MainController(ngDialog) {

    var self = this;

    self.clickToOpen = function() {
        ngDialog.openConfirm({
            template: '../templates/main-modal.html'
        });
    };

}