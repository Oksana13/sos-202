'use strict';

angular.module('sos.quiz', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/quiz', {
            templateUrl: 'templates/quiz.html',
            controller: 'QuizCtrl'
        });
    }])

    .controller('QuizCtrl', [function() {

    }]);