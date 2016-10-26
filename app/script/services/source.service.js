(function () {
    'use strict';

    angular.module('app')
        .service('SourcesService', SourcesService);

    function SourcesService() {
        var vm = this , common, character;
        angular.extend(vm,{
            getCommon: getterSetterCommon,
            setCommon: getterSetterCommon,
            getCharacter: getterSetterCharacter,
            setCharacter: getterSetterCharacter
        });
        
        function getterSetterCommon(value) {
            return arguments.length ? common = value : common;
        }

        function getterSetterCharacter(id) {
            return arguments.length ? character = id : character;
        }
    }
})();