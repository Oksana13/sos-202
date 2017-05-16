(function () {
    'use strict';

    angular
        .module('components')
        .component('quiz', {
            templateUrl: 'Components/Quiz/Quiz.html',
            controller: 'quiz'
        })
        .controller('quiz', quiz);


    function quiz(){
        let $ctrl = this;

    }
})();