(function () {
    'use strict';

    angular
        .module('components')
        .component('calculation', {
            templateUrl: 'Components/Quiz/ResourceCalc/ResourceCalc.html',
            controller: 'calculation'
        })
        .controller('calculation', calculation);


    function calculation(ngDialog){
        let $ctrl = this;
        //
        // $ctrl.clickToOpen = function() {
        //     ngDialog.open({
        //         template: '../templates/main-modal.html',
        //         appendTo: '.main-screen'
        //     });
        // };

    }
})();