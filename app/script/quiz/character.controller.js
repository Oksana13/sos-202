'use strict';

angular.module('app')

    .controller('characterCtrl', characterController);

function characterController(ngDialog, SourcesService) {

    var vm = this,
        character,
        currentCharacter;

    vm.setCharacter = function (event) {

        character = event.currentTarget.id;
        SourcesService.setCharacter(character);

        console.log('set: ' + character);

    };

    vm.getCharacter = function () {

        SourcesService.getCharacter(character);
        currentCharacter = character;

        console.log('get: ' + currentCharacter);

        return currentCharacter;
    };

    


    // self.clickToOpen = function() {
    //     ngDialog.open({
    //         template: '../templates/main-modal.html',
    //         appendTo: '.main-screen'
    //     });
    // };
}