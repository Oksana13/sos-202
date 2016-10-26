(function () {
    'use strict';

    angular.module('app')
        .service('sources', sources);

    function sources() {
        var vm = this , common, character;
        angular.extend(vm,{
            getCommon: getterSetterCommon,
            setCommon: getterSetterCommon
        });
        
        function getterSetterCommon(value) {
            return arguments.length ? common = value : common;
        }
    }
})();