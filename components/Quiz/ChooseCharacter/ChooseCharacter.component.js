(function () {
    'use strict';

    angular
        .module('components')
        .component('chooseCharacter', {
            templateUrl: 'components/Quiz/ChooseCharacter/ChooseCharacter.html',
            controller: 'chooseCharacter'
        })
        .controller('chooseCharacter', chooseCharacter);


    function chooseCharacter(ngDialog){
        let $ctrl = this,
            character,
            currentCharacter;

        $ctrl.setCharacter = function (event) {

            character = event.currentTarget.id;
            SourcesService.setCharacter(character);

            console.log('set: ' + character);

        };

        $ctrl.getCharacter = function () {

            SourcesService.getCharacter(character);
            currentCharacter = character;

            console.log('get: ' + currentCharacter);

            return currentCharacter;
        };

        // $ctrl.clickToOpen = function() {
        //     ngDialog.open({
        //         template: '../templates/main-modal.html',
        //         appendTo: '.main-screen'
        //     });
        // };

    }
})();