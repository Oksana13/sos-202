(function () {
    'use strict';

    angular
        .module('components')
        .component('feedback', {
            templateUrl: 'Components/Quiz/Feedback/Feedback.html',
            controller: 'feedback'
        })
        .controller('feedback', feedback);


    function feedback (ngDialog, SourcesService){
        let $ctrl = this,
        type;

        type = SourcesService.getViolenceType();



        $ctrl.clickToOpenComments = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Comments/Template-Activist-Comment.html'
            });
        };

        $ctrl.clickToOpenLetters = function() {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Templates-Comments/Letters/Template-Letters-' + type + '.html'
            });
        };




    }
})();