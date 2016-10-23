'use strict';

angular.module('app')

    .controller('SourcesCtrl', SourcesController);

function SourcesController($scope, ngDialog) {

    var self = this;

    $scope.ages = ['18-', '18+'];
    $scope.ageRes = {val: ''};

    $scope.socials = ['1', '2', '3', '4', '5'];
    $scope.socialRes = {val: ''};

    $scope.cognitives = ['1', '2', '3', '4', '5'];
    $scope.cognitiveRes = {val: ''};

    $scope.emotionals = ['1', '2', '3', '4', '5'];
    $scope.emotionalRes = {val: ''};

    $scope.images = ['1', '2', '3', '4', '5'];
    $scope.imageRes = {val: ''};

    $scope.families = ['1', '2', '3', '4', '5'];
    $scope.familyRes = {val: ''};

    $scope.works = ['1', '2', '3', '4', '5'];
    $scope.workRes = {val: ''};

    $scope.nonstandards = ['1', '2', '3', '4', '5'];
    $scope.nonstandardRes = {val: ''};

    $scope.healths = ['1', '2', '3', '4', '5'];
    $scope.healthRes = {val: ''};

    $scope.financials = ['1', '2', '3', '4', '5'];
    $scope.financialdRes = {val: ''};

    $scope.locations = ['1', '2', '3', '4', '5'];
    $scope.locationdRes = {val: ''};

    $scope.religions = ['1', '2', '3', '4', '5'];
    $scope.religionsdRes = {val: ''};

    $scope.homophobias = ['1', '2', '3', '4', '5'];
    $scope.homophobiadRes = {val: ''};



    // self.clickToOpen = function() {
    //     ngDialog.open({
    //         template: '../templates/main-modal.html',
    //         appendTo: '.main-screen'
    //     });
    // };
}