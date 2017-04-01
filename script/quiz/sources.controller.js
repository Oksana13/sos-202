'use strict';

angular.module('app')

    .controller('SourcesCtrl', SourcesController);

function SourcesController(ngDialog, SourcesService) {

    var vm = this,
        arr,
        age, social, cognitive, emotional, image, family, work, nonstandard, health, financial, location, religion, homophobia, isolation, openness, common;

    vm.ages = ['18-', '18+'];
    vm.ageRes = {val: ''};

    vm.socials = ['1', '2', '3', '4', '5'];
    vm.socialRes = {val: ''};

    vm.cognitives = ['1', '2', '3', '4', '5'];
    vm.cognitiveRes = {val: ''};

    vm.emotionals = ['1', '2', '3', '4', '5'];
    vm.emotionalRes = {val: ''};

    vm.images = ['1', '2', '3', '4', '5'];
    vm.imageRes = {val: ''};

    vm.families = ['1', '2', '3', '4', '5'];
    vm.familyRes = {val: ''};

    vm.works = ['1', '2', '3', '4', '5'];
    vm.workRes = {val: ''};

    vm.nonstandards = ['1', '2', '3', '4', '5'];
    vm.nonstandardRes = {val: ''};

    vm.healths = ['1', '2', '3', '4', '5'];
    vm.healthRes = {val: ''};

    vm.financials = ['1', '2', '3', '4', '5'];
    vm.financialRes = {val: ''};

    vm.locations = ['1', '2', '3', '4', '5'];
    vm.locationRes = {val: ''};

    vm.religions = ['1', '2', '3', '4', '5'];
    vm.religionRes = {val: ''};

    vm.homophobias = ['1', '2', '3', '4', '5'];
    vm.homophobiaRes = {val: ''};


    vm.checkAge = function () {
        age = vm.ageRes.val;

        SourcesService.setAge(age);

    };

    vm.checkIsolation = function () {
        social = vm.socialRes.val,
        cognitive = vm.cognitiveRes.val,
        emotional = vm.emotionalRes.val;

        arr = {
            1: +social,
            2: +cognitive,
            3: +emotional
        };

        isolation = +social + +cognitive + +emotional;

        SourcesService.setIsolation(isolation, arr);
    };


    vm.checkOpenness = function () {
        image = vm.imageRes.val,
        family = vm.familyRes.val,
        work = vm.workRes.val;

        arr = {
            1: +image,
            2: +family,
            3: +work
        };

        openness = +image + +family + +work;

        SourcesService.setOpenness(openness, arr);
    };


    vm.checkCommon = function () {
        nonstandard = vm.nonstandardRes.val,
        health = vm.healthRes.val,
        financial = vm.financialRes.val,
        location = vm.locationRes.val,
        religion = vm.religionRes.val,
        homophobia = vm.homophobiaRes.val;

        arr = {
            1: +nonstandard,
            2: +health,
            3: +financial,
            4: +location,
            5: +religion,
            6: +homophobia
        };

        common = +nonstandard + +health + +financial + +location + +religion + +homophobia;
        // todo: rewrite count on source.service.js

        SourcesService.setCommon(common, arr);
    };


    // self.clickToOpen = function() {
    //     ngDialog.open({
    //         template: '../templates/main-modal.html',
    //         appendTo: '.main-screen'
    //     });
    // };
}