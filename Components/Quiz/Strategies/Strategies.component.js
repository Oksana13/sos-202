(function () {
    'use strict';

    angular
        .module('components')
        .component('strategies', {
            templateUrl: 'Components/Quiz/Strategies/Strategies.html',
            controller: 'strategies'
        })
        .controller('strategies', strategies);


    function strategies (ngDialog, $http, SourcesService){
        let $ctrl = this;

        $ctrl.clickToOpenSurvival = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-girl-homeViolence.html'
            });
        };

        $ctrl.clickToOpenCoping = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-girl-homeViolence.html'
            });
        };

        $ctrl.clickToOpenResistance = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-girl-homeViolence.html'
            });
        };

        $ctrl.clickToOpenMutualAid = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-girl-homeViolence.html'
            });
        };



        $ctrl.character = function () {
            return SourcesService.getCharacter();
        };

        console.log($ctrl.character());




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