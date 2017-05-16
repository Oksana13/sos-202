(function () {
    'use strict';

    angular
        .module('components')
        .component('calculation', {
            templateUrl: 'Components/Quiz/ResourceCalc/ResourceCalc.html',
            controller: 'calculation'
        })
        .controller('calculation', calculation);


    function calculation(ngDialog, SourcesService, $rootScope, $scope){
        let $ctrl = this;

        // Resource types

        $ctrl.clickToOpenSex = function() {
            ngDialog.open({
                template: 'Data/Templates-Resource-Types/tpl-resource-sex.html',
                controller: 'Popup'
            });
        };


        $ctrl.clickToOpenAge = function() {
            let age;

            (SourcesService.getAge()) ? age = 'less' : age = 'more';

            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Resource-Types/tpl-resource-age-18-' +  age +'.html'
            });
        };


        $ctrl.clickToOpenOpenness = function() {
            let openness;

            if (SourcesService.getOpenness() < 6) {
                openness = 'low'
            } else if (SourcesService.getOpenness() > 5 && SourcesService.getOpenness() < 10) {
                openness = 'mid'
            } else if (SourcesService.getOpenness() > 9) {
                openness = 'high'
            }

            console.log(openness);

            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Resource-Types/tpl-resource-openness-' + openness + '.html'
            });
        };

        $ctrl.clickToOpenIsolation = function() {
            let isolation;

            if (SourcesService.getIsolation() < 6) {
                isolation = 'low'
            } else if (SourcesService.getIsolation() > 5 && SourcesService.getIsolation() < 10) {
                isolation = 'mid'
            } else if (SourcesService.getIsolation() > 9) {
                isolation = 'high'
            }

            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Resource-Types/tpl-resource-isolation-' + isolation + '.html'
            });
        };

        $ctrl.clickToOpenCommon = function() {
            let common;

            if (SourcesService.getCommon() < 10) {
                common = 'high'
            } else if (SourcesService.getCommon() > 9 && SourcesService.getCommon() < 19) {
                common = 'mid'
            } else if (SourcesService.getCommon() > 18) {
                common = 'low'
            }

            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Resource-Types/tpl-resource-common-' + common + '.html'
            });
        };


        // Violence types

        $ctrl.moveToStrategies = function () {
          window.location = '#!/strategies';
        };


        $ctrl.setViolenceType = function (val) {
            SourcesService.setViolenceType(val) ;
            $ctrl.moveToStrategies();
        };

        $ctrl.getViolenceType = function () {
            return SourcesService.getViolenceType() ;
        };

        // Help buttons for Violence types


        $ctrl.clickToOpenHomeViolenceHelp = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: '<div class="popup-content">Насилие со стороны со стороны родителей или других взрослых родственников, жестокое обращение с детьми</div>'
            });
        };

        $ctrl.clickToOpenPartnerViolenceHelp = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: '<div class="popup-content">Насилие со стороны партнеров по браку (официальному или гражданскому) или по романтическим отношениям</div>'
            });
        };

        $ctrl.clickToOpenStalkingHelp = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: '<div class="popup-content">Навязчивое нежелательное внимание или преследование  </div>'
            });
        };

        $ctrl.clickToOpenCilHelp = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: '<div class="popup-content">Изнасилование, совершаемое в связи с (предполагаемой) сексуальной ориентацией и/или гендерной идентичностью человека.</div>'
            });
        };

        $ctrl.clickToOpenBullingHelp = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: '<div class="popup-content">Травля со стороны участника/участников группы по отношению к другому участнику/участникам той же группы</div>'
            });
        };

        $ctrl.clickToOpenDiscriminationHelp = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: '<div class="popup-content">Насилие, осуществляемое представителями помогающих профессий (врачами, психологами, психотерапевтами, социальными работниками), а также педагогами и общинными лидерами</div>'
            });
        };

    }
})();