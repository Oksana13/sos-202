(function () {
    'use strict';

    angular
        .module('components')
        .component('home', {
            templateUrl: 'components/Common/HomeBtn/Home.html',
            controller: 'home'
        })
        .controller('home', home);


    function home(){
        let $ctrl = this;

    }
})();