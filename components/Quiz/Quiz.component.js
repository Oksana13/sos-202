(function () {
    'use strict';

    angular
        .module('components')
        .component('quiz', {
            templateUrl: 'components/Quiz/Quiz.html',
            controller: 'quiz'
        })
        .controller('quiz', quiz);


    function quiz(){
        let $ctrl = this;

        $ctrl.clickToOpen = function() {
            ngDialog.open({
                template: '../templates/main-modal.html',
                appendTo: '.main-screen'
            });
        };

    }
})();