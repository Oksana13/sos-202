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

        $ctrl.clickToOpenSocial = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: `<div class="popup-content">
                <p>Мера снижения <b>количества</b> контактов и связей у девушки.</p>
                <p>- Зеленый — «количество общения и контактов удовлетворительное»;</p>
            <p>- Желтый — «не знаю» или «сложно сказать»;</p>
            <p>- Красный — «сильная нехватка общения и контактов относительно желаемого уровня».</p>
            </div>`
            });
        };

        $ctrl.clickToOpenCognitive = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: `<div class="popup-content">
                <p>Мера ограничения доступа к информации у девушки.</p> 
<p>- Зеленый — «в общении со значимыми людьми запретных тем нет и поиск информации не ограничен»;</p> 
<p>- Желтый — «не знаю» или «сложно сказать»;</p> 
<p>- Красный — «в общении со значимыми людьми определенные темы находятся под запретом, самостоятельно искать информацию по этим темам сложно и рискованно».</p>
            </div>`
            });
        };

        $ctrl.clickToOpenEmotional = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: `<div class="popup-content"><p>Мера снижения <b>качества</b> контактов и связей у девушки.</p> 
                <p>- Зеленый — «глубина и взаимность в общении с близкими людьми удовлетворительная»;</p>
            <p>- Желтый — «не знаю» или «сложно сказать»;</p>
            <p>- Красный — «по-настоящему близких людей сейчас нет».<p></div>`
            });
        };

        $ctrl.clickToOpenImage = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: `<div class="popup-content"><p>Какой стиль внешности девушка обычно выбирает для себя?</p> 
                <p>- Зеленый — «стиль внешности в основном гендерно нормативный, без атрибутики ЛГБТИК-движения»;</p>
            <p>Желтый — «сложно сказать» или «бывает по-разному»;</p>
            <p>Красный — «стиль внешности в основном гендерно ненормативный, частое использование атрибутики ЛГБТИК-движения».</p></div>`
            });
        };

        $ctrl.clickToOpenFamilies = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: `<div class="popup-content"><p>Насколько романтические увлечения и/или идентичность девушки приняты и признаны членами ее семьи?</p> 
                <p>- Зеленый — «нейтральная или доброжелательная реакция большинства членов семьи при каминг-ауте или аутинге девушки»;</p>
            <p>- Желтый — «не знаю» или «полная закрытость в семье»;</p>
            <p>- Красный — «негативная реакция большинства членов семьи при каминг-ауте или аутинге девушки».</p></div>`
            });
        };

        $ctrl.clickToOpenWorks = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: `<div class="popup-content"><p>Насколько романтические увлечения и/или идентичность девушки приняты и признаны членами ее коллектива по основному месту учебы или работы?</p>
                <p>Зеленый — «такого коллектива нет» или «нейтральная или доброжелательная реакция большинства членов коллектива при каминг-ауте или аутинге девушки»;</p>
            <p>Желтый — «не знаю» или «полная закрытость в коллективе»;</p>
            <p>Красный — «негативная реакция большинства членов коллектива при каминг-ауте или аутинге девушки».</p></div>`
            });
        };

        $ctrl.clickToOpenNonstandards = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: `<div class="popup-content"><p>Нейротипичное либо нейроотличное поведение девушки, а также наличие либо отсутствие у нее какого-либо психиатрического диагноза. Нейротипичным (нейронормативным) человеком называется тот, чья психика и физиологическая работа мозга соответствует доминирующему в обществе представлению о норме.</p>
                <p>- Зеленый — «нейротипичность и отсутствие психиатрического диагноза»;</p>
            <p>- Желтый — «не знаю» или «сложно сказать»;</p>
            <p>- Красный — «нейроненормативность и наличие психиатрического диагноза».</p></div>`
            });
        };

        $ctrl.clickToOpenHealths = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: `<div class="popup-content"><p>Наличие либо отсутствие у девушки проблем со здоровьем, в том числе и наличие либо отсутствие инвалидности.</p> 
                <p>- Зеленый — «со здоровьем в целом нет проблем и нет инвалидности»;</p>
            <p>- Желтый — «не знаю» или «сложно сказать»;</p>
            <p>- Красный — «наличие тяжелых проблем со здоровьем и группы инвалидности».</p></div>`
            });
        };

        $ctrl.clickToOpenFinancial = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: `<div class="popup-content"><p>Уровень благосостояния семьи девушки, доступность для нее финансовых средств и предметов первой необходимости.</p> 
                <p>- Зеленый — «семья обеспеченная; деньги на личные расходы девушке доступны или имеется постоянный заработок»;</p>
            <p>- Желтый — «не знаю» или «сложно сказать»;</p>
            <p>- Красный — «семья находится за чертой бедности; финансовая помощь от родственников ограничена, а также у девушки нет постоянного заработка».</p></div>`
            });
        };

        $ctrl.clickToOpenLocations = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: `<div class="popup-content"><p>Мера благополучия атмосферы в месте постоянного проживания девушки.</p> 
                <p>- Зеленый — «в доме принято в целом доброжелательное и уважительное отношение друг к другу»;</p>
            <p>- Желтый — «не знаю» или «сложно сказать»;</p>
            <p>- Красный — «в доме принято насилие по отношению к женщинам, детям и/или пожилым людям».</p></div>`
            });
        };

        $ctrl.clickToOpenReligions = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: `<div class="popup-content"><p>Является ли девушка представительницей этнического и/или религиозного меньшинства, по отношению к которому в обществе существуют стойкие предрассудки?</p> 
                <p>- Зеленый — «принадлежность к этническому и к религиозному большинству»;</p>
            <p>- Желтый — «не знаю» или «сложно сказать»;</p>
            <p>- Красный — «принадлежность как к этническому, так и к религиозному меньшинствам, по отношению к которым в обществе сильны негативные стереотипы».</p></div>`
            });
        };

        $ctrl.clickToOpenHomophobias = function () {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: `<div class="popup-content"><p>Отношение девушки к собственной возможной гомо-/бисексуальности или гендерной ненормативности.</p>
                <p>- Зеленый — «спокойное отношение к собственной возможной не-гетеросексуальности или гендерной ненормативности»;</p>
            <p>- Желтый — «не знаю» или «сложно сказать»;</p>
            <p>- Красный — «стойкая тревожность, страх и/или недовольство по поводу собственной возможной не-гетеросексуальности или гендерной ненормативности».</p></div>`
            });
        };

    }
})();