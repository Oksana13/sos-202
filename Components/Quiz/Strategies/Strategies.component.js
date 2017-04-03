(function () {
    'use strict';

    angular
        .module('components')
        .component('strategies', {
            templateUrl: 'Components/Quiz/Strategies/Strategies.html',
            controller: 'strategies'
        })
        .controller('strategies', strategies);


    function strategies (ngDialog, $http){
        let $ctrl = this;

        $ctrl.clickToOpen = function() {
            ngDialog.open({
                template: '../templates/main-modal.html',
                appendTo: '.main-screen'
            });
        };

        $http.get('Data/Violence-type.json')
            .then(function (response) {
                    $ctrl.result = response.data;

                    console.log($ctrl.result);

                },
                function (errResponse) {
                    console.log(errResponse);
                });




    }
})();