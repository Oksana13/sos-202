(function () {
    'use strict';

    angular
        .module('components')
        .component('mainScreen', {
            templateUrl: 'Components/Main/Main-screen.html',
            controller: 'mainScreen'
        })
        .controller('mainScreen', mainScreen);


    function mainScreen(ngDialog){
        let $ctrl = this;

        $ctrl.clickToOpen = function() {
            ngDialog.open({
                appendTo: '.main-screen',
                controller: 'Popup',
                template: 'Data/Template-Main-Page.html'
            });
        };

    }
})();