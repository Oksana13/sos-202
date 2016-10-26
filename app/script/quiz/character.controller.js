'use strict';

angular.module('app')

    .controller('characterCtrl', characterController);

function characterController(ngDialog, SourcesService) {

    var vm = this,
        character;

    vm.setCharacter = function (event) {

        character = event.currentTarget.id;

        SourcesService.setCharacter(character);
    };
    
    

    // self.clickToOpen = function() {
    //     ngDialog.open({
    //         template: '../templates/main-modal.html',
    //         appendTo: '.main-screen'
    //     });
    // };
}