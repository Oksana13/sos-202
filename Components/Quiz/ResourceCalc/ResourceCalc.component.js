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

        $ctrl.clickToOpenSex = function() {
            ngDialog.open({
                template: 'Data/Templates-Violence-Type/tpl-' + $ctrl.character() + '-homeViolence.html',
                controller: 'Popup'
            });
        };


        $ctrl.clickToOpenAge = function() {



            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-' + $ctrl.character() + '-homeViolence.html'
            });
        };

        // $rootScope.$on(' updateAge', function () {
        //     $ctrl.age = function () {
        //         return SourcesService.getAge();
        //     };
        //
        //     console.log($ctrl.age);
        // });

        // $ctrl.clickToOpenOrientation = function() {
        //     ngDialog.open({
        //         controller: 'Popup',
        //         template: 'Data/Templates-Violence-Type/tpl-' + $ctrl.character() + '-homeViolence.html'
        //     });
        // };
        //
        // $ctrl.clickToOpenOpenness = function() {
        //     ngDialog.open({
        //         controller: 'Popup',
        //         template: 'Data/Templates-Violence-Type/tpl-' + $ctrl.character() + '-homeViolence.html'
        //     });
        // };
        //
        // $ctrl.clickToOpenIsolation = function() {
        //     ngDialog.open({
        //         controller: 'Popup',
        //         template: 'Data/Templates-Violence-Type/tpl-' + $ctrl.character() + '-homeViolence.html'
        //     });
        // };
        //
        // $ctrl.clickToOpenCommon = function() {
        //     ngDialog.open({
        //         controller: 'Popup',
        //         template: 'Data/Templates-Violence-Type/tpl-' + $ctrl.character() + '-homeViolence.html'
        //     });
        // };

        // Violence types

        $ctrl.character = function () {
            return SourcesService.getCharacter();
        };

        console.log($ctrl.character());



        $ctrl.clickToOpenHomeViolence = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-' + $ctrl.character() + '-homeViolence.html'
            });
        };

        $ctrl.clickToOpenPartnerViolence = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-' + $ctrl.character() + '-PartnerViolence.html'
            });
        };

        $ctrl.clickToOpenStalking = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-' + $ctrl.character() + '-stulking.html'
            });
        };

        $ctrl.clickToOpenCil = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-' + $ctrl.character() + '-cil.html'
            });
        };

        $ctrl.clickToOpenBulling = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-' + $ctrl.character() + '-bulling.html'
            });
        };

        $ctrl.clickToOpenDiscrimination = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-' + $ctrl.character() + '-discrimination.html'
            });
        };


        $ctrl.clickToOpenType = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Violence-Type/tpl-' + $ctrl.character() + '-homeViolence.html'
            });
        };

    }
})();