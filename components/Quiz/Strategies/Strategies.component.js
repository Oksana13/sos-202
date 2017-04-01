(function () {
    'use strict';

    angular
        .module('components')
        .component('strategies', {
            templateUrl: 'components/Quiz/Strategies/Strategies.html',
            controller: 'strategies'
        })
        .controller('strategies', strategies);


    function strategies (ngDialog){
        let $ctrl = this;

        $ctrl.clickToOpen = function() {
            ngDialog.open({
                template: '../templates/main-modal.html',
                appendTo: '.main-screen'
            });
        };

    }
})();