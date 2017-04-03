(function () {
    'use strict';

    angular
        .module('components')
        .component('calculation', {
            templateUrl: 'Components/Quiz/ResourceCalc/ResourceCalc.html',
            controller: 'calculation'
        })
        .controller('calculation', calculation);


    function calculation(ngDialog, SourcesService, $rootScope, $scope){
        let $ctrl = this;

        $ctrl.clickToOpenSex = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>По данным ВОЗ, риск жестокого обращения с детьми повышается в тех общинах/сообществах, где в числе ряда других особенностей приняты «социальные и культурные нормы, поддерживающие или прославляющие насилие над другими, одобряющие применение телесных наказаний, требующие жестких гендерных ролей или принижающие статус ребенка во взаимоотношениях между родителями и детьми». Ограничение подростка рамками жестких стереотипов о «настоящих женщинах» и «настоящих мужчинах», обусловленное традициями или обычаями, может идти в разрез с присущим ребенку темпераментом (и соответственно с особенностями ее/его типа высшей нервной деятельности) и нарушать его права как человека (например, запрет получать образование по «недостаточно женской/мужской» специальности).</p><p>К сожалению, именно по отношениям к девочкам и девушкам во многих обществах существуют стереотипы об их меньшей логичности и объективности (по сравнению с мужчинами), и, как следствие, о меньшей значимости их мнений и меньшей достоверности их суждений. Именно девушек и женщин гораздо чаще оценивают по внешности, а не исходя из их личностных и профессиональных качеств, и оказывают давление за несоответствие канонам «идеального женского тела» и «женского вкуса», и именно девушки гораздо чаще страдают от расстройств пищевого поведения и дисморфофобии. Именно девочки и молодые девушки обычно становятся объектами навязчивого преследования (которое зачастую легитимируется обществом и воспринимается формой флирта) и сексуального насилия (в том числе и инцеста), при этом именно девушкам приписывается «владение техниками сексуальной провокации с рождения». И именно девочкам и девушкам в рамках процесса женской социализации с детства прививается позиция терпения, уступчивости и покладистости, а также навязывается единоличная ответственность за мир в семье и/или отношениях, отчего девушкам бывает гораздо сложнее, чем юношам, как опознать насилие, так и защитить себя.</p></div>'
            });
        };


        $ctrl.clickToOpenAge = function() {



            ngDialog.open({
                plain: true,
                controller: 'Popup',
                // template: 'Components/Common/Popup/Popup.html'
                template: '<div class="popup-content"><p>Это общая информация о правовом положении людей, не достигших 18 лет. Если Вы подозреваете, что права несовершеннолетней девушки нарушаются, рекомендуем обсудить ситуацию с юристом в частном порядке.</p><p><b>Правоспособность</b> — то есть способность лица иметь субъективные юридические права и обязанности — возникает в момент рождения человека. Базовым принципом большинства современных правовых систем в мире является признание равной гражданской правоспособности всех граждан независимо от пола, имущественного положения, расы и т.д.</p><p><b>Деликтоспособность</b> — способность человека самостоятельно нести ответственность за вред, причиненный его противоправным деянием — наступает с 16 лет, однако согласно Уголовному Кодексу РФ существуют преступления, ответственность за которые наступает в 14 лет (например, против личности и против собственности).</p><p><b>Дееспособность</b> — это способность приобретать субъективные юридические права и обязанности, осуществлять и прекращать их. Дееспособность предполагает полную осознанность своих действий.</p><p>Согласно Гражданскому кодексу РФ, ребенок в возрасте до 6 лет считается абсолютно недееспособным; лица в возрасте от 6 до 14 лет считаются малолетними, и за ними закреплена дееспособность малолетних. Лица в возрасте от 14 до 18 лет считаются обладающими частичной дееспособностью, поскольку могут совершать сделки лишь с письменного согласия родителей или законных представителей. Впрочем, частично дееспособное лицо может осуществлять ряд прав самостоятельно: например, свободно распоряжаться своими заработками или стипендией, осуществлять права автора произведений искусства или науки, вносить вклады в кредитные организации.</p><p>В полном объеме дееспособность возникает с 18 лет. При этом Гражданский Кодекс РФ закрепляет два случая наступления дееспособности до 18-летия: 1) эмансипация лица в возрасте от 16 лет, осуществляющего трудовую деятельность или предпринимательскую деятельность, и 2) вступление несовершеннолетнего лица в брак с лицом противоположного паспортного пола. </p></div>'
            });
        };

        // $rootScope.$on(' updateAge', function () {
        //     $ctrl.age = function () {
        //         return SourcesService.getAge();
        //     };
        //
        //     console.log($ctrl.age);
        // });

        $ctrl.clickToOpenOrientation = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>По данным ВОЗ, риск жестокого обращения с детьми повышается в тех общинах/сообществах, где в числе ряда других особенностей приняты «социальные и культурные нормы, поддерживающие или прославляющие насилие над другими, одобряющие применение телесных наказаний, требующие жестких гендерных ролей или принижающие статус ребенка во взаимоотношениях между родителями и детьми». Ограничение подростка рамками жестких стереотипов о «настоящих женщинах» и «настоящих мужчинах», обусловленное традициями или обычаями, может идти в разрез с присущим ребенку темпераментом (и соответственно с особенностями ее/его типа высшей нервной деятельности) и нарушать его права как человека (например, запрет получать образование по «недостаточно женской/мужской» специальности).</p><p>К сожалению, именно по отношениям к девочкам и девушкам во многих обществах существуют стереотипы об их меньшей логичности и объективности (по сравнению с мужчинами), и, как следствие, о меньшей значимости их мнений и меньшей достоверности их суждений. Именно девушек и женщин гораздо чаще оценивают по внешности, а не исходя из их личностных и профессиональных качеств, и оказывают давление за несоответствие канонам «идеального женского тела» и «женского вкуса», и именно девушки гораздо чаще страдают от расстройств пищевого поведения и дисморфофобии. Именно девочки и молодые девушки обычно становятся объектами навязчивого преследования (которое зачастую легитимируется обществом и воспринимается формой флирта) и сексуального насилия (в том числе и инцеста), при этом именно девушкам приписывается «владение техниками сексуальной провокации с рождения». И именно девочкам и девушкам в рамках процесса женской социализации с детства прививается позиция терпения, уступчивости и покладистости, а также навязывается единоличная ответственность за мир в семье и/или отношениях, отчего девушкам бывает гораздо сложнее, чем юношам, как опознать насилие, так и защитить себя.</p></div>'
            });
        };

        $ctrl.clickToOpenOpenness = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Открытость хотя бы одному человеку из постоянного окружения, который отнесся к девушке сочувственно, выслушал ее и подтвердил, что несмотря ни на что она остается ему близкой и дорогой, — это очень мощный и ценный ресурс поддержки для такой девушки. Как правило речь не идет о ситуации абсолютного взаимопонимания и взаимного одобрения, но именно в таких условиях положительные аспекты открытости могут сработать в полной мере.</p></div>'
            });
        };

        $ctrl.clickToOpenIsolation = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Приемлемое для человека количество контактов и отношений, в том числе и обладающих особой глубиной и доверительностью, безусловно снижает риск развития у него самоизоляции. Но важно обратить внимание и на следующие моменты — принята ли в этих отношениях культура рефлексии прошлых противоречий, есть ли подход к прошлым конфликтам «было и прошло, незачем вспоминать», а также идеализированные представления о понимании без слов и восприятие обсуждений чувств как жалоб, «нытья», «слива чернухи».</p><p>При этом напоминаем, что очень важно отделять изоляцию (и самоизоляцию) от потребности побыть наедине с собой, свойственной каждому из нас, от защиты собственного личного пространства и личных границ, а также от степени общительности человека в целом. </p></div>'
            });
        };

        $ctrl.clickToOpenCommon = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Возможно это стало неожиданностью, как много дополнительных факторов могут оказывать влияние на доступность помощи для человека, живущего в ситуации насилия, снижать или повышать ее/его уязвимость. Такой анализ контекста очень важен, ведь чем к большему количеству уязвимых социальных групп принадлежит девушка, тем явственнее для нее угроза подвергнуться несправедливому или жестокому обращению.</p><p>Зачастую само по себе узнавание о разнообразии ситуаций, историй и  обстоятельств, в которых оказываются гендерно неконформные или испытывающие не-гетеросексуальные влечения люди, может оказаться  весомым источником сил. А участие в сообществах взаимопомощи, заявленные как дружелюбные для людей из нескольких уязвимых групп и учитывающие многие социальные стигмы, возможно станет поводом для размышлений о собственной чуткости при общении.</p></div>'
            });
        };

        $ctrl.clickToOpenhomeViolence = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Насилие со стороны со стороны родителей или других взрослых родственников, жестокое обращение с детьми</p></div>'
            });
        };

        $ctrl.clickToOpenPartnerViolence = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Насилие со стороны партнеров по браку (официальному или гражданскому) или по романтическим отношениям</p></div>'
            });
        };

        $ctrl.clickToOpenstulking = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Навязчивое нежелательное внимание или преследование </p></div>'
            });
        };

        $ctrl.clickToOpencil = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Изнасилование, совершаемое в связи с (предполагаемой) сексуальной ориентацией и/или гендерной идентичностью человека.</p></div>'
            });
        };

        $ctrl.clickToOpenbulling = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Травля со стороны участника/участников группы по отношению к другому участнику/участникам той же группы</p></div>'
            });
        };

        $ctrl.clickToOpendiscrimination = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Насилие, осуществляемое представителями помогающих профессий (врачами, психологами, психотерапевтами, социальными работниками), а также педагогами и общинными лидерами</p></div>'
            });
        };


        $ctrl.clickToOpenType = function() {
            ngDialog.open({
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Насилие, осуществляемое представителями помогающих профессий (врачами, психологами, психотерапевтами, социальными работниками), а также педагогами и общинными лидерами</p></div>'
            });
        };

    }
})();