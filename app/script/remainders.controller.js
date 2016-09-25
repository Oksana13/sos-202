'use strict';

angular.module('sos.remainders', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/remainders', {
    templateUrl: 'templates/remainders.html',
    controller: 'Remainders1Ctrl'
  });
}])

.controller('RemaindersCtrl', [function() {

}]);