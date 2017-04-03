(function () {
    'use strict';

    angular.module('app')
        .service('SourcesService', SourcesService);

    function SourcesService($rootScope) {
        let $ctrl = this, age, character, isolation, openness, common,
            ageStack = false,
            opennessStack = false,
            isolationStack = false,
            commonStack = false,
            allStack = false;

        //...Stack - checks are all inputs checked or not

        angular.extend($ctrl,{

            getCharacter: getterSetterCharacter,
            setCharacter: getterSetterCharacter,
        });

        function getterSetterCharacter(id) {
            return arguments.length ? character = id : character;
        }

        return {

            // age

            setAge: function (value) {
                age = value;
                if (age == undefined || null ) {
                    ageStack = false;
                } else {
                    ageStack = true;
                    return age;
                }
            },

            getAge: function () {
                return age;
            },

            setAgeStack: function (age) {
                if (age == undefined || null ) {
                    ageStack = false;
                } else {
                    ageStack = true;
                }
            },

            getAgeStack: function () {
                return ageStack;
            },

            // isolation

            setIsolation: function(value) {
                isolation = value;
            },

            getIsolation: function () {
                return isolation;
            },

            setIsolationStack: function (isolation, arr) {
                let notNullValue = true;

                angular.forEach(arr, function (value, key) {
                    value == 0 ? notNullValue = false : true
                });

                notNullValue ? isolationStack = true : isolationStack = false;
            },

            getIsolationStack: function () {
                return isolationStack;
            },

            // openness

            setOpenness: function(value) {
                openness = value;
            },

            getOpenness: function () {
                return openness;
            },

            setOpennessStack: function (openness, arr) {
                let notNullValue = true;

                angular.forEach(arr, function (value, key) {
                    value == 0 ? notNullValue = false : true
                });

                notNullValue ? opennessStack = true : opennessStack = false;
            },

            getOpennessStack: function () {
                return opennessStack;
            },

            // common

            setCommon: function(value) {
                common = value;
            },

            getCommon: function () {
                return common;
            },

            setCommonStack: function (common, arr) {
                let notNullValue = true;

                angular.forEach(arr, function (value, key) {
                    value == 0 ? notNullValue = false : true
                });

                notNullValue ? commonStack = true : commonStack = false;
            },

            getCommonStack: function () {
                return commonStack;
            },

            // allStacks

            getAllStacks: function () {
                let notNullValue = true,
                    arr = [ageStack, isolationStack, opennessStack, commonStack];

                angular.forEach(arr, function (value, key) {
                    value == 0 ? notNullValue = false : true
                });

                notNullValue ? allStack = true : allStack = false;

                return allStack;

            },


            uploadedAllStacks: function () {
                $rootScope.$emit('uploadedAllStacks', allStack);
            }

        }

    }
})();