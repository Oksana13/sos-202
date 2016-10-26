(function () {
    'use strict';

    angular.module('app')
        .service('SourcesService', SourcesService);

    function SourcesService() {
        var vm = this, character, isolation, openness, common,
            ageStack = false,
            opennessStack = false,
            isolationStack = false,
            commonStack = false;

        //...Stack - checks are all inputs checked or not

        // todo: check ...Stacks to continue quest

        angular.extend(vm,{

            getCharacter: getterSetterCharacter,
            setCharacter: getterSetterCharacter,
            getAge: getterSetterAge,
            setAge: getterSetterAge,
            getIsolation: getterSetterIsolation,
            setIsolation: getterSetterIsolation,
            getOpenness: getterSetterOpenness,
            setOpenness: getterSetterOpenness,
            getCommon: getterSetterCommon,
            setCommon: getterSetterCommon

        });

        function getterSetterCharacter(id) {
            console.log(character);
            return arguments.length ? character = id : character;
        }

        function getterSetterAge(age) {

            if (age == undefined || null ) {
                ageStack = false;
            } else {
                ageStack = true;
                return age;
            }
        }

        function getterSetterIsolation(isolation, arr) {
            var notNullValue = true;

            angular.forEach(arr, function (value, key) {
                value == 0 ? notNullValue = false : true
            });

            notNullValue ? isolationStack = true : isolationStack = false;

            if (isolation.length) {
                isolation = value;
            } else {
                return isolation;
            }

        }

        function getterSetterOpenness(openness, arr) {
            var notNullValue = true;

            angular.forEach(arr, function (value, key) {
                value == 0 ? notNullValue = false : true
            });

            notNullValue ? opennessStack = true : opennessStack = false;

            if (openness.length) {
                openness = value;
            } else {
                return openness;
            }
        }

        function getterSetterCommon(common, arr) {
            var notNullValue = true;

            angular.forEach(arr, function (value, key) {
                value == 0 ? notNullValue = false : true
            });

            notNullValue ? commonStack = true : commonStack = false;

            if (common.length) {
                common = value;
            } else {
                return common;
            }
        }

    }
})();