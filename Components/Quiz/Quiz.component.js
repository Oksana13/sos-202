(function () {
    'use strict';

    angular
        .module('components')
        .component('quiz', {
            templateUrl: 'Components/Quiz/Quiz.html',
            controller: 'quiz'
        })
        .controller('quiz', quiz);


    function quiz(ngDialog){
        let $ctrl = this;

        $ctrl.clickToOpen = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>А если поподробнее — о ком все-таки пойдет речь?</p><p>Здесь не стоит искать ответов на вопросы «Правда ли я лесбиянка?» и «Как понять, мой ребенок трансгендер или нет?». А также мы не требуем от читателя развернуться и уйти, если нет уверенности по поводу сексуальной ориентации или гендерной идентичности — собственной, Вашего близкого человека или Вашего клиента. Травле, преследованию и жестокому обращению подвергаются далеко не только люди, относящие себя к ЛГБТИК (то есть лесбиянки, геи, бисексуалы, трансгендеры, интерсексы или квиры). И не только совершившие каминг-аут (то есть открытые в этом качестве добровольно) или пережившие аутинг (то есть открытые принудительно). С насилием сталкиваются, зачастую независимо от своей открытости, интерсексы — люди, имеющие вариации гениталий, половых желез или хромосомного набора, чьи тела не вписываются в нормативные представления о женских и мужских. И те, кто впервые обнаруживает в себе однополое влечение и кто просто проявляет гендерную неконформность. А еще те, кто не имеет потребности в каком-либо самоопределении. Ну и конечно же те, кто любых этих людей открыто поддерживает.</p><p>Наша идентичность не сводится к поступкам и предпочтениям — женщина, которую влечет к другой женщине, может не являться лесбиянкой или не называть себя лесбиянкой. Но именно наше поведение, наши слова и нашу внешность оценивают окружающие, и исходя из этого делают о нас свои выводы. В том числе и приходят к мыслям, что какие-то наши качества, действия или взгляды являются поводами для насилия. Поэтому мы не ограничиваем круг наших читателей только ЛГБТИК-сообществом.</p></div>'
            });
        };

    }
})();