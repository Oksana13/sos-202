'use strict';

angular
    .module('sos.remainders', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/reminders', {
            templateUrl: 'templates/reminders.html',
            controller: 'Remainders1Ctrl'
        });
    }])

    // .controller('RemaindersCtrl', RemindersController);

    // function RemindersController() {
    //
    // }