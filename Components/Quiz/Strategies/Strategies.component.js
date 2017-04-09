(function () {
    'use strict';

    angular
        .module('components')
        .component('strategies', {
            templateUrl: 'Components/Quiz/Strategies/Strategies.html',
            controller: 'strategies'
        })
        .controller('strategies', strategies);


    function strategies (ngDialog, SourcesService){
        let $ctrl = this,
        character,
        type;

        character = SourcesService.getCharacter();

        type = SourcesService.getViolenceType();

        console.log(character);
        console.log(type);


        $ctrl.clickToOpenSurvival = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-' + character + '-' + type + '.html'
            });
        };

        $ctrl.clickToOpenCoping = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-' + character + '-' + type + '.html'
            });
        };

        $ctrl.clickToOpenResistance = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-' + character + '-' + type + '.html'
            });
        };

        $ctrl.clickToOpenMutualAid = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-' + character + '-' + type + '.html'
            });
        };

    }
})();