(function () {
    'use strict';

    angular
        .module('components')
        .component('chooseCharacter', {
            templateUrl: 'Components/Quiz/ChooseCharacter/ChooseCharacter.html',
            controller: 'chooseCharacter'
        })
        .controller('chooseCharacter', chooseCharacter);


    function chooseCharacter(SourcesService, ngDialog){
        let $ctrl = this,
            character,
            currentCharacter;

        $ctrl.setCharacter = function (event) {

            character = event.currentTarget.id;
            SourcesService.setCharacter(character);

            // console.log('set: ' + character);

        };

        $ctrl.getCharacter = function () {

            SourcesService.getCharacter(character);
            currentCharacter = character;

            // console.log('get: ' + currentCharacter);

            return currentCharacter;
        };


        $ctrl.clickToOpen = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content">Выберите точку зрения из четырех возможных. Кликните на знак вопроса рядом с соответствующим названием, если необходимо уточнение, а затем на фигурку персонажа. Далее нажмите на стрелку в нижнем правом углу страницы. Если ни одна из точек зрения все равно не подходит, можно выбрать любую или вернуться на стартовую страницу к Памяткам и Контактам.</div>'
            });
        };

        $ctrl.clickToOpenGirl = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: '<div class="popup-content">Если ты обнаружила в себе влечение к девушкам и/или ведешь себя гендерно неконформно, а также если ты позиционируешь себя как ЛБТИК.</div>'
            });
        };

        $ctrl.clickToOpenFriend = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: '<div class="popup-content">Если твоя подруга обнаружила в себе влечение к девушкам и/или ведет себя гендерно неконформно, а также если твоя подруга позиционирует себя как ЛБТИК.</div>'
            });
        };

        $ctrl.clickToOpenParent = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                appendClassName: 'small-popup',
                template: '<div class="popup-content">Если Ваша дочь (младшая родственница) обнаружила в себе влечение к девушкам и/или ведет себя гендерно неконформно, а также если она позиционирует себя как ЛБТИК.</div>'
            });
        };

        $ctrl.clickToOpenHelper = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content">Если Вы педагог, врач, социальный работник или равный консультант в каком-либо сообществе, а также если Вы психолог, не знакомый или мало знакомый с ЛГБТИК-проблематикой. И если к Вам обратилась девушка, обнаружившая в себе влечение к девушкам и/или ведущая себя гендерно неконформно, либо позиционирующая себя как ЛБТИК, а также если к Вам обратился кто-то из ее друзей или родных.</div>'
            });
        };

    }
})();