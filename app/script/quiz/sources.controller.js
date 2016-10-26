'use strict';

angular.module('app')

    .controller('SourcesCtrl', SourcesController);

function SourcesController(ngDialog, sources) {

    var vm = this,
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

        return age;

    };

    vm.checkIsolation = function () {
        social = vm.socialRes.val,
            cognitive = vm.cognitiveRes.val,
            emotional = vm.emotionalRes.val;

        isolation = +social + +cognitive + +emotional;

        return isolation;
    };


    vm.checkOpenness = function () {
        image = vm.imageRes.val,
            family = vm.familyRes.val,
            work = vm.workRes.val;

        openness = +image + +family + +work;

        return openness;
    };


    vm.checkCommon = function () {
        nonstandard = vm.nonstandardRes.val,
            health = vm.healthRes.val,
            financial = vm.financialRes.val,
            location = vm.locationRes.val,
            religion = vm.religionRes.val,
            homophobia = vm.homophobiaRes.val;

        common = +nonstandard + +health + +financial + +location + +religion + +homophobia;

        sources.setCommon(common);
        return common;
    };


    // self.clickToOpen = function() {
    //     ngDialog.open({
    //         template: '../templates/main-modal.html',
    //         appendTo: '.main-screen'
    //     });
    // };
}