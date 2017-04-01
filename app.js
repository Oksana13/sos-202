'use strict';

angular.module('app', ['components', 'ngRoute', 'ngDialog', 'ui.bootstrap'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider

            .when('/', {
                template: '<main-screen></main-screen>',
                controller: 'mainScreen'
            })

            .when('/contacts', {
                template: '<contacts></contacts>',
                controller: 'contacts'
            })

            .when('/reminders', {
                template: '<reminders></reminders>',
                controller: 'reminders'
            })

            .when('/quiz', {
                template: '<quiz></quiz>',
                controller: 'quiz'
            })

            .when('/quiz-character', {
                template: '<choose-character></choose-character>',
                controller: 'chooseCharacter'
            })

            .when('/sources', {
                template: '<sources></sources>',
                controller: 'sources'
            })

            .when('/calculation', {
                template: '<calculation></calculation>',
                controller: 'calculation'
            })

            .when('/strategies', {
                template: '<strategies></strategies>',
                controller: 'strategies'
            })

            .otherwise({redirectTo: '/'});
    }
    ])

    .directive('bookmark', function () {
        return {
            restrict: 'E',
            templateUrl: './templates/bookmark.html'
        }
    });

    angular.element(document).ready(() => {
        angular.bootstrap(document, ['app']);
    });


