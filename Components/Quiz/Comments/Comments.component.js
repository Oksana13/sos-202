(function () {
    'use strict';

    angular
        .module('components')
        .component('comments', {
            templateUrl: 'Components/Quiz/Comments/Comments.html',
            controller: 'comments'
        })
        .controller('comments', comments);


    function comments (ngDialog, SourcesService){
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