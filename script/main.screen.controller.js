'use strict';

angular.module('app')

    .controller('MainCtrl', MainController);

function MainController(ngDialog) {

    var self = this;

    self.clickToOpen = function() {
        ngDialog.open({
            template: '../templates/main-modal.html',
            appendTo: '.main-screen'
        });
    };

}