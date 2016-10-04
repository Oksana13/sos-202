'use strict';

angular.module('sos', ['ngRoute', 'sos.remainders', 'sos.contacts'])

    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/remainders'});
        }
    ])

    .directive('contacts', function () {
        return {
            restrict: 'E',
            templateUrl: '../templates/contacts.html'
        }
    })

    .directive('reminders', function () {
        return {
            restrict: 'E',
            templateUrl: '../templates/reminders.html'
        }
    });