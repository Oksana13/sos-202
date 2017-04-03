(function () {
    'use strict';

    angular
        .module('components')
        .component('mainScreen', {
            templateUrl: 'Components/Main/Main-screen.html',
            controller: 'mainScreen'
        })
        .controller('mainScreen', mainScreen);


    function mainScreen(ngDialog, $scope){
        let $ctrl = this;

        $ctrl.clickToOpen = function() {
            ngDialog.open({
                // template: '../Components/Common/Popup/Popup.html',
                appendTo: '.main-screen',
                plain: true,
                controller: 'Popup',
                template: '<div class="popup-content"><p>Здравствуйте! Этот сайт является информационным приложением проекта «Дети-404». Название «SOS!202» также отсылает к коду состояния интернет-страницы — «202 Accepted», что означает «Принято». То есть, «SOS!202» можно перевести как «запрос о помощи принят и обрабатывается».</p><p>Все тексты на этом сайте созданы коллективом психологов, активистов и юристов для подростков и молодых людей, ведущих себя в разрез с гендерными стереотипами и/или имеющих романтическое влечение к лицам одного с ними пола, — а также для их близких, их родных и специалистов помогающих профессий. В этих текстах рассказывается о том, на что желательно обратить внимание различным вовлеченным и задействованным людям в ряде ситуаций насилия. Нам кажется важным об этом говорить, поскольку данная аудитория читателей имеет ограниченный доступ к подобной информации, особенно затрагивающей их специфические проблемы и поданной доброжелательно и объективно. Нашей интерактивной книге мы решили дать подзаголовок «Брошюра выживания»: мы полагаем, что называть человека, находящегося в ситуации насилия, словом «жертва» может быть не всегда оправданно, и поддерживаем применение альтернативного понятия «выживающая/выживающий» по отношению к такому человеку, чтобы не возникало подтекста о ее/его заведомой слабости, бессилии и пассивности. <p>На данный момент сайт содержит данные только о тех вариантах событий, когда насилию подверглись девочки и девушки. Мы искренне надеемся, что в будущем здесь можно будет найти информацию, ориентированную на более широкий круг пострадавших, вне зависимости от их пола и гендера.</p><p>Чтобы увидеть список организаций, инициатив и групп взаимопомощи, куда можно обратиться в ситуации насилия, пройдите по ссылке «Контакты». Чтобы получить общее представление о различных ситуациях насилия, пройдите по ссылке «Памятки». Чтобы получить подробную информацию о каждой рассматриваемой ситуации насилия, пройдите по ссылке «Квест».</p><p>Мы также будем рады вашим отзывам и предложениям — для этого существует поле «Обратная связь», которое станет доступно после прохождения любой линии «Квеста».</p></div>'
            });
        };

    }
})();