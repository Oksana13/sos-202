(function () {
    'use strict';

    angular
        .module('components')
        .component('contacts', {
            templateUrl: 'components/Contacts/Contacts.html',
            controller: 'contacts'
        })
        .controller('contacts', contacts);


    function contacts(ngDialog){
        let $ctrl = this;

        // $ctrl.clickToOpen = function() {
        //     ngDialog.open({
        //         template: '../templates/main-modal.html',
        //         appendTo: '.main-screen'
        //     });
        // };

    }
})();