'use strict';

angular.module('app')

    .controller('QuizStartCtrl', QuizStartController);

    function QuizStartController(ngDialog) {

        var self = this;

        self.clickToOpen = function() {
            ngDialog.open({
                template: '../templates/main-modal.html',
                appendTo: '.main-screen'
            });
        };
    }