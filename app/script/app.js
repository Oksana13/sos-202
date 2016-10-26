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
                templateUrl: '../templates/quiz/quiz-start.html',
                controller: 'QuizStartCtrl',
                controllerAs: 'quizStart'
            })

            .when('/quiz-character', {
                templateUrl: '../templates/quiz/choose-character.html',
                controller: 'characterCtrl',
                controllerAs: 'character'
            })

            .when('/sources', {
                templateUrl: '../templates/quiz/sources.html',
                controller: 'SourcesCtrl',
                controllerAs: 'sources'
            })

            .otherwise({redirectTo: '/'});
    }
    ])
 
    .directive('linktohomepage', function () {
        return {
            restrict: 'E',
            templateUrl: '../templates/link-to-homepage.html'
        }
    })

    .directive('titlebg', function () {
        return {
            restrict: 'E',
            templateUrl: '../templates/quiz/title.html'
        }
    });

    // .provider('isolation', function () {
    //     var vm = this,
    //         data = {};
    //     angular.extend(vm, {
    //         data: getData,
    //         init: init
    //     });
    //
    //     function init() {
    //
    //     }
    //
    //     function getData() {
    //         return data;
    //     }
    //
    //     this.$get = function ($http) {
    //         // code to initialize/configure the SERVICE goes here (executed during `run` stage)
    //         $http.get("source/json/data.json")
    //             .then(function (response) {
    //                 debugger;
    //                 data = response.data;
    //             }, function (error) {
    //                 //some magic
    //             });
    //         return data;
    //     };
    // });
