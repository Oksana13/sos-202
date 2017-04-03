(function () {
    'use strict';

    angular
        .module('components')
        .component('strategies', {
            templateUrl: 'Components/Quiz/Strategies/Strategies.html',
            controller: 'strategies'
        })
        .controller('strategies', strategies);


    function strategies (ngDialog, $http, SourcesService){
        let $ctrl = this;

        $ctrl.clickToOpenSurvival = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Открытость хотя бы одному человеку из постоянного окружения, который отнесся к девушке сочувственно, выслушал ее и подтвердил, что несмотря ни на что она остается ему близкой и дорогой, — это очень мощный и ценный ресурс поддержки для такой девушки. Как правило речь не идет о ситуации абсолютного взаимопонимания и взаимного одобрения, но именно в таких условиях положительные аспекты открытости могут сработать в полной мере.</p></div>'
            });
        };

        $ctrl.clickToOpenCoping = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Открытость хотя бы одному человеку из постоянного окружения, который отнесся к девушке сочувственно, выслушал ее и подтвердил, что несмотря ни на что она остается ему близкой и дорогой, — это очень мощный и ценный ресурс поддержки для такой девушки. Как правило речь не идет о ситуации абсолютного взаимопонимания и взаимного одобрения, но именно в таких условиях положительные аспекты открытости могут сработать в полной мере.</p></div>'
            });
        };

        $ctrl.clickToOpenResistance = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Открытость хотя бы одному человеку из постоянного окружения, который отнесся к девушке сочувственно, выслушал ее и подтвердил, что несмотря ни на что она остается ему близкой и дорогой, — это очень мощный и ценный ресурс поддержки для такой девушки. Как правило речь не идет о ситуации абсолютного взаимопонимания и взаимного одобрения, но именно в таких условиях положительные аспекты открытости могут сработать в полной мере.</p></div>'
            });
        };

        $ctrl.clickToOpenMutualAid = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Открытость хотя бы одному человеку из постоянного окружения, который отнесся к девушке сочувственно, выслушал ее и подтвердил, что несмотря ни на что она остается ему близкой и дорогой, — это очень мощный и ценный ресурс поддержки для такой девушки. Как правило речь не идет о ситуации абсолютного взаимопонимания и взаимного одобрения, но именно в таких условиях положительные аспекты открытости могут сработать в полной мере.</p></div>'
            });
        };



        $ctrl.character = function () {
            return SourcesService.getCharacter();
        };

        console.log($ctrl.character());




        $http.get('Data/Violence-type.json')
            .then(function (response) {
                    $ctrl.result = response.data;

                    console.log($ctrl.result);

                },
                function (errResponse) {
                    console.log(errResponse);
                });




    }
})();