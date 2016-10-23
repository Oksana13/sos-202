'use strict';

angular.module('app')

    .controller('SourcesCtrl', SourcesController);

function SourcesController($scope, ngDialog) {

    var self = this,
        age, social, cognitive, emotional, image, family, work, nonstandard, health, financial, location, religion, homophobia, isolation, openness, common;

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
    $scope.financialRes = {val: ''};

    $scope.locations = ['1', '2', '3', '4', '5'];
    $scope.locationRes = {val: ''};

    $scope.religions = ['1', '2', '3', '4', '5'];
    $scope.religionRes = {val: ''};

    $scope.homophobias = ['1', '2', '3', '4', '5'];
    $scope.homophobiaRes = {val: ''};


    $scope.checkAge = function () {
        age = $scope.ageRes.val;

        return age;

    };

    $scope.checkIsolation = function () {
        social = $scope.socialRes.val,
        cognitive = $scope.cognitiveRes.val,
        emotional = $scope.emotionalRes.val;

        isolation = +social + +cognitive + +emotional;

        return isolation;
    };


    $scope.checkOpenness = function () {
        image = $scope.imageRes.val,
        family = $scope.familyRes.val,
        work = $scope.workRes.val;

        openness = +image + +family + +work;

        return openness;
    };


    $scope.checkCommon = function () {
        nonstandard = $scope.nonstandardRes.val,
        health = $scope.healthRes.val,
        financial = $scope.financialRes.val,
        location = $scope.locationRes.val,
        religion = $scope.religionRes.val,
        homophobia = $scope.homophobiaRes.val;

        common = +nonstandard + +health + +financial + +location + +religion + +homophobia;

        return common;
    };






    // self.clickToOpen = function() {
    //     ngDialog.open({
    //         template: '../templates/main-modal.html',
    //         appendTo: '.main-screen'
    //     });
    // };
}