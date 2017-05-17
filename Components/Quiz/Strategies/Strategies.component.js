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

        $ctrl.character = function () {
          return SourcesService.getCharacter();
        };

        type = SourcesService.getViolenceType();

        if (character === undefined) {
            character = 'girl'
        }

        if (type === undefined) {
            SourcesService.setViolenceType('homeViolence', 'Домашнее насилие');
            type = 'homeViolence'
        }

        $ctrl.getViolenceTypeName = function () {
            return SourcesService.getViolenceTypeName();
        };

        $ctrl.clickToOpenSurvival = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/Survival/tpl-' + character + '-' + type + '.html'
            });
        };

        $ctrl.clickToOpenCoping = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/Сoping/tpl-' + character + '-' + type + '.html'
            });
        };

        $ctrl.clickToOpenResistance = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/Resistance/tpl-' + character + '-' + type + '.html'
            });
        };

        $ctrl.clickToOpenMutualAid = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/Mutualaid/tpl-' + character + '-' + type + '.html'
            });
        };

        // Help buttons

        $ctrl.clickToOpenSurvivalHelp = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: '<div class="popup-content">Как оказать себе или своим близким первую помощь?</div>'
            });
        };

        $ctrl.clickToOpenCopingHelp = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: '<div class="popup-content">Как мы справляемся со стрессом?</div>'
            });
        };

        $ctrl.clickToOpenResistanceHelp = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: '<div class="popup-content">Как мы защищаем себя или своих близких?</div>'
            });
        };

        $ctrl.clickToOpenMutualAidHelp = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: '<div class="popup-content">Как мы поддерживаем друг друга в формате «равный — равному»?</div>'
            });
        };

    }
})();