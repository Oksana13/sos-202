(function () {
    'use strict';

    angular
        .module('components')
        .component('reminders', {
            templateUrl: 'Components/Reminders/Reminders.html',
            controller: 'reminders'
        })
        .controller('reminders', reminders);


    function reminders(ngDialog, SourcesService){
        let $ctrl = this;

        $ctrl.clickToOpenHelp = function() {
            ngDialog.open({
                template: 'Data/Reminders/About.html'
            });
        };

        // types

        $ctrl.clockToOpenHomeViolence = function() {
            ngDialog.open({
                template: 'Data/Reminders/Template-HomeViolence.html'
            });
        };

        $ctrl.clockToOpenPartnerViolence = function() {
            ngDialog.open({
                template: 'Data/Reminders/Template-PartnerViolence.html'
            });
        };

        $ctrl.clockToOpenStulking = function() {
            ngDialog.open({
                template: 'Data/Reminders/Template-Stalking.html'
            });
        };

        $ctrl.clockToOpenCil = function() {
            ngDialog.open({
                template: 'Data/Reminders/Template-Cil.html'
            });
        };

        $ctrl.clockToOpenBulling = function() {
            ngDialog.open({
                template: 'Data/Reminders/Template-Bulling.html'
            });
        };

        $ctrl.clockToOpenDiscrimination = function() {
            ngDialog.open({
                template: 'Data/Reminders/Template-Discrimination.html'
            });
        };
    }
})();