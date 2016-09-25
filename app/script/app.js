'use strict';

angular.module('sos', [
  'ngRoute',
  'sos.remainders',
  'sos.contacts'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/remainders'});
}]);
