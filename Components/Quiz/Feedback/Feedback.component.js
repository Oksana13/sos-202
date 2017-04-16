(function () {
    'use strict';

    angular
        .module('components')
        .component('feedback', {
            templateUrl: 'Components/Quiz/Feedback/Feedback.html',
            controller: 'feedback'
        })
        .controller('feedback', feedback);


    function feedback ($http){
        let $ctrl = this;

        $ctrl.onSubmit = function () {

            let text = $ctrl.text;

            $http({
                method  : 'POST',
                url     : 'sendToSos.php',
                data    : text,
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .then(function (response) {
                    let result = response.data;
                    console.log(result)
                }, function err (responseErr) {
                    console.log(responseErr)
                });
        }

    }
})();