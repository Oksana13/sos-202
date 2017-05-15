(function () {
    'use strict';

    angular
        .module('components')
        .component('sources', {
            templateUrl: 'Components/Quiz/Sources/Sources.html',
            controller: 'sources'
        })
        .controller('sources', sources);


    function sources(ngDialog, SourcesService, $rootScope){
        let $ctrl = this,
            arr,
            age, social, cognitive, emotional, image, family, work, nonstandard, health, financial, location, religion, homophobia, isolation, openness, common;

        $ctrl.ages = ['18-', '18+'];
        $ctrl.ageRes = {val: ''};

        $ctrl.socials = ['1', '2', '3', '4', '5'];
        $ctrl.socialRes = {val: ''};

        $ctrl.cognitives = ['1', '2', '3', '4', '5'];
        $ctrl.cognitiveRes = {val: ''};

        $ctrl.emotionals = ['1', '2', '3', '4', '5'];
        $ctrl.emotionalRes = {val: ''};

        $ctrl.images = ['1', '2', '3', '4', '5'];
        $ctrl.imageRes = {val: ''};

        $ctrl.families = ['1', '2', '3', '4', '5'];
        $ctrl.familyRes = {val: ''};

        $ctrl.works = ['1', '2', '3', '4', '5'];
        $ctrl.workRes = {val: ''};

        $ctrl.nonstandards = ['1', '2', '3', '4', '5'];
        $ctrl.nonstandardRes = {val: ''};

        $ctrl.healths = ['1', '2', '3', '4', '5'];
        $ctrl.healthRes = {val: ''};

        $ctrl.financials = ['1', '2', '3', '4', '5'];
        $ctrl.financialRes = {val: ''};

        $ctrl.locations = ['1', '2', '3', '4', '5'];
        $ctrl.locationRes = {val: ''};

        $ctrl.religions = ['1', '2', '3', '4', '5'];
        $ctrl.religionRes = {val: ''};

        $ctrl.homophobias = ['1', '2', '3', '4', '5'];
        $ctrl.homophobiaRes = {val: ''};

        $ctrl.fill = false;


        $ctrl.checkAge = function () {
            age = $ctrl.ageRes.val;

            SourcesService.setAge(age);
            SourcesService.setAgeStack(age);
            SourcesService.updatedAllStacks();

            $ctrl.getAge = function () {
              return SourcesService.getCurrentAge();
            };
        };

        $ctrl.getAgeStack = function () {
            (SourcesService.getAgeStack()) ? $ctrl.fill = true : $ctrl.fill = false;

            // console.log($ctrl.fill);
        };


        $ctrl.checkIsolation = function () {
            social = $ctrl.socialRes.val,
                cognitive = $ctrl.cognitiveRes.val,
                emotional = $ctrl.emotionalRes.val;

            arr = {
                1: +social,
                2: +cognitive,
                3: +emotional
            };

            isolation = +social + +cognitive + +emotional;

            SourcesService.setIsolation(isolation);
            SourcesService.setIsolationStack(isolation, arr);
            SourcesService.updatedAllStacks();
        };

        $ctrl.getIsolationStack = function () {
            (SourcesService.getIsolationStack()) ? $ctrl.fill = true : $ctrl.fill = false;

            // console.log($ctrl.fill);
        };


        $ctrl.checkOpenness = function () {
            image = $ctrl.imageRes.val,
            family = $ctrl.familyRes.val,
            work = $ctrl.workRes.val;

            arr = {
                1: +image,
                2: +family,
                3: +work
            };

            openness = +image + +family + +work;

            SourcesService.setOpennessStack(openness, arr);
            SourcesService.setOpenness(openness);
            SourcesService.updatedAllStacks();
        };


        $ctrl.checkCommon = function () {
            nonstandard = $ctrl.nonstandardRes.val,
                health = $ctrl.healthRes.val,
                financial = $ctrl.financialRes.val,
                location = $ctrl.locationRes.val,
                religion = $ctrl.religionRes.val,
                homophobia = $ctrl.homophobiaRes.val;

            arr = {
                1: +nonstandard,
                2: +health,
                3: +financial,
                4: +location,
                5: +religion,
                6: +homophobia
            };

            common = +nonstandard + +health + +financial + +location + +religion + +homophobia;
            // todo: rewrite count on source.service.js

            SourcesService.setCommon(common);
            SourcesService.setCommonStack(common, arr);
            SourcesService.updatedAllStacks();

            // console.log($ctrl.allStacks());
        };

        $rootScope.$on(' updateAllStacks', function () {
            $ctrl.allStacks();
        });

        $ctrl.allStacks = function () {
            return SourcesService.getAllStacks();
        };

        $ctrl.checkSources = function () {
            if (!$ctrl.allStacks()) {
                ngDialog.open({
                    plain: true,
                    controller: 'Popup',
                    template: '<div class="popup-content"><div class="alert alert-warning" uib-alert dismiss-on-timeout="3500"  close="closeThisDialog()" role="alert">Для перехода на следующую страницу необходимо заполнить все пункты</div></div>',
                    appendClassName: 'alert-dialog'
                });
            }
        };



        // Help buttons

        $ctrl.clickToOpenAbout = function () {
            ngDialog.open({
                controller: 'Popup',
                template: 'Data/Template-Resources-About.html'
            });
        };

        $ctrl.clickToOpenSocial = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content">Мера снижения количества контактов и связей. Выберите один из пяти цветовых пунктов, где Зеленый — «количество общения и контактов удовлетворительное», Желтый — «не знаю» или «сложно сказать», а Красный — «сильная нехватка общения и контактов относительно желаемого уровня».</div>'
            });
        };

        $ctrl.clickToOpenCognitive = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content">Мера ограничения доступа к информации. Выберите один из пяти цветовых пунктов, где Зеленый — «в общении со значимыми людьми запретных тем нет и поиск информации не ограничен», Желтый — «не знаю» или «сложно сказать», а Красный — «в общении со значимыми людьми определенные темы находятся под запретом, самостоятельно искать информацию по этим темам сложно и рискованно».</div>'
            });
        };

        $ctrl.clickToOpenEmotional = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content">Мера снижения качества контактов и связей. Выберите один из пяти цветовых пунктов, где Зеленый — «глубина и взаимность в общении с близкими людьми удовлетворительная», Желтый — «не знаю» или «сложно сказать», а Красный — «по-настоящему близких людей сейчас нет».</div>'
            });
        };

        $ctrl.clickToOpenImage = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content">Стиль внешности и использование знаков принадлежности к субкультуре ЛГБТИК-сообщества. Выберите один из пяти цветовых пунктов, где Зеленый — «стиль внешности в основном соответствует доминирующей гендерной норме, без атрибутики ЛГБТИК-движения»; Желтый — «сложно сказать» или «бывает по-разному», а Красный — «высокая гендерная ненормативность в стиле внешности и частое использование атрибутики ЛГБТИК-движения».</div>'
            });
        };

        $ctrl.clickToOpenFamilies = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content">Мера осведомленности членов семьи об увлечениях и/или идентичности девушки. Выберите один из пяти цветовых пунктов, где Зеленый — «открытость хотя бы перед одним родителем или иным высокостатусным родственником, чья реакция была нейтральной или доброжелательной»; Светло-Зеленый — «открытость хотя бы перед одним родственником-ровесником, чья реакция была нейтральной или доброжелательной, и закрытость перед высокостатусными родственниками»; Желтый — «не знаю» или «полная закрытость в семье»; Оранжевый — «открытость хотя бы перед одним родственником-ровесником, чья реакция была негативной, и закрытость перед высокостатусными родственниками»; а Красный — «открытость хотя бы перед одним родителем или иным высокостатусным родственником, чья реакция была негативной, при условии, что ни от одного другого взрослого в семье нет поддержки».</div>'
            });
        };

        $ctrl.clickToOpenWorks = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content">Мера осведомленности членов школьной или студенческой группы, деятельность в рамках которой является основной для девушки в данный момент, об увлечениях и/или идентичности девушки. Выберите один из пяти цветовых пунктов, где Зеленый — «такой группы нет» или «открытость хотя бы перед одним сверстником в группе, чья реакция была нейтральной или доброжелательной»; Светло-Зеленый — «открытость хотя бы перед одним учителем, чья реакция была нейтральной или доброжелательной, и закрытость перед сверстниками в группе»; Желтый — «не знаю» или «полная закрытость в группе»; Оранжевый — «открытость хотя бы перед одним учителем, чья реакция была негативной, и закрытость перед сверстниками в группе»; а Красный — «открытость хотя бы перед одним сверстником в группе, чья реакция была негативной, при условии, что ни от одного другого сверстника в группе нет поддержки».</div>'
            });
        };

        $ctrl.clickToOpenNonstandards = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content">Нейротипичное или нейроненормативное поведение девушки, а также наличие или отсутствие какого-либо формального психиатрического диагноза. Выберите один из цветовых пунктов, где Зеленый — «нейротипичность и отсутствие психиатрического диагноза», Желтый — «не знаю» или «сложно сказать», а Красный — «нейроненормативность и наличие психиатрического диагноза».</div>'
            });
        };

        $ctrl.clickToOpenHealths = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content">Наличие либо отсутствие у девушки проблем со здоровьем, в том числе и наличие либо отсутствие инвалидности. Выберите один из цветовых пунктов, где Зеленый — «со здоровьем в целом нет проблем и нет инвалидности», Желтый — «не знаю» или «сложно сказать», а Красный — «наличие тяжелых проблем со здоровьем и группы инвалидности».</div>'
            });
        };

        $ctrl.clickToOpenFinancial = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content">Уровень благосостояния семьи девушки, а также мера доступности для девушки необходимых ей финансовых средств и предметов первой необходимости (в первую очередь еды и одежды). Выберите один из цветовых пунктов, где Зеленый — «семья обеспеченная; деньги на личные расходы доступны или имеется постоянный заработок», Желтый — «не знаю» или «сложно сказать», а Красный — «семья находится за чертой бедности; финансовая помощь от родственников ограничена, а также нет постоянного заработка».</div>'
            });
        };

        $ctrl.clickToOpenLocations = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content">Мера благополучия атмосферы в месте постоянного проживания девушки: является ли ситуация в доме заведомо насильственной, независимо от признания девушки в своих увлечениях или в своей идентичности. Выберите один из цветовых пунктов, где Зеленый — «в доме принято в целом доброжелательное и уважительное отношение друг к другу», Желтый — «не знаю» или «сложно сказать», а Красный — «в доме принято насилие по отношению к женщинам, детям и/или пожилым людям, а также были случаи жестокого обращения с животными».</div>'
            });
        };

        $ctrl.clickToOpenReligions = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content">В этом пункте важно оценить, является ли внешность девушки отличной от типичной для белого большинства, к какой этнической и/или религиозной группе принадлежит девушка, и существуют ли по отношению к данной группе/группам в обществе стойкие предрассудки. Выберите один из цветовых пунктов, где Зеленый — «принадлежность к этническому и к религиозному большинству», Желтый — «не знаю» или «сложно сказать», а Красный — «внешность отличается от типичной для белого большинства; принадлежность как к этническому, так и к религиозному меньшинствам, по отношению к которым в обществе сильны негативные стереотипы».</div>'
            });
        };

        $ctrl.clickToOpenHomophobias = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content">Отношение девушки к собственной возможной гомо-/бисексуальности или гендерной ненормативности. Выберите один из цветовых пунктов, где Зеленый — «спокойное отношение к собственной возможной не-гетеросексуальности или гендерной ненормативности», Желтый — «не знаю» или «сложно сказать», а Красный — «стойкая тревожность, страх и/или недовольство по поводу собственной возможной не-гетеросексуальности или гендерной ненормативности».</div>'
            });
        };

    }
})();