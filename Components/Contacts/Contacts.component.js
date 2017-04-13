(function () {
    'use strict';

    angular
        .module('components')
        .component('contacts', {
            templateUrl: 'Components/Contacts/Contacts.html',
            controller: 'contacts'
        })
        .controller('contacts', contacts);


    function contacts(){
        let $ctrl = this;

        $ctrl.contact = '';

        $ctrl.chooseContact = function (val) {
            $ctrl.contact = val;
        };

    }
})();