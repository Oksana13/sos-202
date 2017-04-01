(function () {
    'use strict';

    angular
        .module('components')
        .component('mainScreen', {
            templateUrl: 'components/Main/Main-screen.html',
            controller: 'mainScreen'
        })
        .controller('mainScreen', mainScreen);


    function mainScreen(ngDialog){
        let $ctrl = this;

        $ctrl.clickToOpen = function() {
            ngDialog.open({
                template: '../templates/main-modal.html',
                appendTo: '.main-screen'
            });
        };

    }
})();