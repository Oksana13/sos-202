'use strict';

angular.module('app', ['ngRoute', 'ngDialog'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider

            .when('/', {
                templateUrl: '../templates/firstscreen.html',
                controller: 'main.screen.controller.js'
            })

            .when('/contacts', {
                templateUrl: '../templates/contacts.html',
                controller: 'contacts.controller.js'
            })

            .when('/reminders', {
                templateUrl: '../templates/reminders.html',
                controller: 'reminders.controller.js'
            })

            .when('/quiz', {
                templateUrl: '../templates/quiz.html',
                controller: 'quiz.controller.js'
            })

            .otherwise({redirectTo: '/'});
        }
    ]);

    // .directive('firstscreen', function () {
    //     return {
    //         restrict: 'E',
    //         templateUrl: '../templates/firstscreen.html'
    //     }
    // })
    //
    // .directive('contacts', function () {
    //     return {
    //         restrict: 'E',
    //         templateUrl: '../templates/contacts.html'
    //     }
    // })
    //
    // .directive('reminders', function () {
    //     return {
    //         restrict: 'E',
    //         templateUrl: '../templates/reminders.html'
    //     }
    // });