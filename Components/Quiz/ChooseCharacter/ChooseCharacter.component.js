(function () {
    'use strict';

    angular
        .module('components')
        .component('chooseCharacter', {
            templateUrl: 'Components/Quiz/ChooseCharacter/ChooseCharacter.html',
            controller: 'chooseCharacter'
        })
        .controller('chooseCharacter', chooseCharacter);


    function chooseCharacter(SourcesService, ngDialog, $location){
        let $ctrl = this,
            character,
            currentCharacter;

        $ctrl.setCharacter = function (event) {

            character = event.currentTarget.id;
            SourcesService.setCharacter(character);
            $location.path('/sources-about');
        };

        $ctrl.getCharacter = function () {

            SourcesService.getCharacter(character);
            currentCharacter = character;

            return currentCharacter;
        };

        $ctrl.clickToOpenGirl = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: `<div class="popup-content"><p>Ты:</p>
                <p>- обнаружила в себе влечение к девушкам;</p>
            <p>- ведешь себя гендерно неконформно;</p>
            <p>- определяешь себя как ЛБТИК.</p></div>`
            });
        };

        $ctrl.clickToOpenFriend = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: `<div class="popup-content"><p>Твоя подруга:</p>
                <p>- обнаружила в себе влечение к девушкам;</p>
            <p>- ведет себя гендерно неконформно;</p>
            <p>- определяет себя как ЛБТИК.</p></div>`
            });
        };

        $ctrl.clickToOpenParent = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: `<div class="popup-content"><p>Ваша дочь:</p>
                <p>- обнаружила в себе влечение к девушкам,</p>
                <p>- ведет себя гендерно неконформно;</p>
            <p>- определяет себя как ЛБТИК.</p></div>`
            });
        };

        $ctrl.clickToOpenHelper = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: `<div class="popup-content"><p>Вы:</p>
<p>- педагог, врач, социальный работник или равный консультант;</p>
<p>- психолог, незнакомый или малознакомый с ЛГБТИК-проблематикой.</p> 
<p>К вам обратились:</p>
<p>- девушка, обнаружившая в себе влечение к девушкам,  ведущая себя гендерно неконформно, или определяющая себя как ЛБТИК;</p>
<p>- ее друзья или родственники.</p></div>`
            });
        };

    }
})();