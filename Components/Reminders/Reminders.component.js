(function () {
    'use strict';

    angular
        .module('components')
        .component('reminders', {
            templateUrl: 'Components/Reminders/Reminders.html',
            controller: 'reminders'
        })
        .controller('reminders', reminders);


    function reminders(ngDialog){
        let $ctrl = this;

        // $ctrl.clickToOpen = function() {
        //     ngDialog.open({
        //         template: '../templates/main-modal.html',
        //         appendTo: '.main-screen'
        //     });
        // };

    }
})();