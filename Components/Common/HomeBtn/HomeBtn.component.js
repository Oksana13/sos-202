(function () {
    'use strict';

    angular
        .module('components')
        .component('home', {
            templateUrl: 'Components/Common/HomeBtn/Home.html',
            controller: 'home'
        })
        .controller('home', home);


    function home(){
        let $ctrl = this;

    }
})();