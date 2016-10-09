'use strict';

angular.module('app', ['ngRoute', 'ngDialog'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: '../templates/firstscreen.html',
                title: 'SOS!202',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })

            .when('/contacts', {
                templateUrl: '../templates/contacts.html',
                title: 'Контакты',
                controller: 'ContactsCtrl',
                controllerAs: 'contacts'
            })

            .when('/reminders', {
                templateUrl: '../templates/reminders.html',
                title: 'Памятки',
                controller: 'RemindersCtrl',
                controllerAs: 'reminders'
            })

            .when('/quiz', {
                templateUrl: '../templates/quiz.html',
                controller: 'QuizCtrl',
                controllerAs: 'quiz'
            })

            .otherwise({redirectTo: '/'});
        }
    ])

    .directive('common', function () {
        return {
            restrict: 'E',
            templateUrl: '../templates/common.html'
        }
    });
