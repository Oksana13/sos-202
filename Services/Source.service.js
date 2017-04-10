(function () {
    'use strict';

    angular.module('app')
        .service('SourcesService', SourcesService);

    function SourcesService($rootScope) {
        let $ctrl = this, age, character, isolation, openness, common, type,
            reminders = false,
            ageStack = false,
            opennessStack = false,
            isolationStack = false,
            commonStack = false,
            allStack = false;

        //...Stack - checks are all inputs checked or not

        return {

            // Character

            setCharacter: function (id) {
                character = id
            },

            getCharacter: function () {
                return character
            },

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

            getCurrentAge: function () {
              return age;
            },

            getAge: function () {
                if (age == '18-'){
                    return true
                } else {
                    return false
                }
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


            updatedAllStacks: function () {
                $rootScope.$emit(' updatedAllStacks', allStack);
            },

            setViolenceType: function (val) {
                type = val;
            },

            getViolenceType: function () {
                return type;
            },

            setReminders: function (val) {
                reminders = val;
            },

            getReminders: function () {
                return reminders;
            }

        }

    }
})();