(function () {
    'use strict';

    angular
        .module('components')
        .component('sources', {
            templateUrl: 'Components/Quiz/Sources/Sources.html',
            controller: 'sources'
        })
        .controller('sources', sources);


    function sources(ngDialog, SourcesService, $rootScope){
        let $ctrl = this,
            arr,
            age, social, cognitive, emotional, image, family, work, nonstandard, health, financial, location, religion, homophobia, isolation, openness, common;

        $ctrl.ages = ['18-', '18+'];
        $ctrl.ageRes = {val: ''};

        $ctrl.socials = ['1', '2', '3', '4', '5'];
        $ctrl.socialRes = {val: ''};

        $ctrl.cognitives = ['1', '2', '3', '4', '5'];
        $ctrl.cognitiveRes = {val: ''};

        $ctrl.emotionals = ['1', '2', '3', '4', '5'];
        $ctrl.emotionalRes = {val: ''};

        $ctrl.images = ['1', '2', '3', '4', '5'];
        $ctrl.imageRes = {val: ''};

        $ctrl.families = ['1', '2', '3', '4', '5'];
        $ctrl.familyRes = {val: ''};

        $ctrl.works = ['1', '2', '3', '4', '5'];
        $ctrl.workRes = {val: ''};

        $ctrl.nonstandards = ['1', '2', '3', '4', '5'];
        $ctrl.nonstandardRes = {val: ''};

        $ctrl.healths = ['1', '2', '3', '4', '5'];
        $ctrl.healthRes = {val: ''};

        $ctrl.financials = ['1', '2', '3', '4', '5'];
        $ctrl.financialRes = {val: ''};

        $ctrl.locations = ['1', '2', '3', '4', '5'];
        $ctrl.locationRes = {val: ''};

        $ctrl.religions = ['1', '2', '3', '4', '5'];
        $ctrl.religionRes = {val: ''};

        $ctrl.homophobias = ['1', '2', '3', '4', '5'];
        $ctrl.homophobiaRes = {val: ''};


        $ctrl.checkAge = function () {
            age = $ctrl.ageRes.val;

            SourcesService.setAge(age);
            SourcesService.setAgeStack(age);
            SourcesService.uploadedAllStacks();


        };

        $ctrl.checkIsolation = function () {
            social = $ctrl.socialRes.val,
                cognitive = $ctrl.cognitiveRes.val,
                emotional = $ctrl.emotionalRes.val;

            arr = {
                1: +social,
                2: +cognitive,
                3: +emotional
            };

            isolation = +social + +cognitive + +emotional;

            SourcesService.setIsolation(isolation);
            SourcesService.setIsolationStack(isolation, arr);
            SourcesService.uploadedAllStacks();
        };


        $ctrl.checkOpenness = function () {
            image = $ctrl.imageRes.val,
            family = $ctrl.familyRes.val,
            work = $ctrl.workRes.val;

            arr = {
                1: +image,
                2: +family,
                3: +work
            };

            openness = +image + +family + +work;

            SourcesService.setOpennessStack(openness, arr);
            SourcesService.setOpenness(openness);
            SourcesService.uploadedAllStacks();
        };


        $ctrl.checkCommon = function () {
            nonstandard = $ctrl.nonstandardRes.val,
                health = $ctrl.healthRes.val,
                financial = $ctrl.financialRes.val,
                location = $ctrl.locationRes.val,
                religion = $ctrl.religionRes.val,
                homophobia = $ctrl.homophobiaRes.val;

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

            SourcesService.setCommon(common);
            SourcesService.setCommonStack(common, arr);
            SourcesService.uploadedAllStacks();
        };

        $rootScope.$on('uploadedAllStacks', function () {
            console.log(SourcesService.getAllStacks());

            $ctrl.allStacks = function () {
                return SourcesService.getAllStacks();
            };
        });

    }
})();