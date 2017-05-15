(function () {
    'use strict';

    angular
        .module('components')
        .component('feedback', {
            templateUrl: 'Components/Quiz/Feedback/Feedback.html',
            controller: 'feedback'
        })
        .controller('feedback', feedback);


    function feedback ($http, ngDialog){
        let $ctrl = this;

        $ctrl.onSubmit = function () {

            let text = $ctrl.text;
            let email = $ctrl.email;

            text = encodeURIComponent(text);
            email = encodeURIComponent(email);

            $http({
                method  : 'POST',
                url     : 'send.php',
                data    : 'text=' + '\n' + 'Email: ' + email + '\n' + 'Комментарий: ' + text,
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            })
                .then(function (response) {
                    ngDialog.open({
                        template: 'Components/Common/Alert/Alert-success.html',
                        appendClassName: 'alert-dialog'
                    });

                }, function err (responseErr) {
                    ngDialog.open({
                        template: 'Components/Common/Alert/Alert-warning.html',
                        appendClassName: 'alert-dialog'
                    });
                });
        }

    }
})();