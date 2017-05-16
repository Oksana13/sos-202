(function () {
    'use strict';

    angular.module('app')
        .service('ImagesService', ImagesService);

    function ImagesService($http) {
        let $ctrl = this;

        return {

            getImages: function () {

                let images = [
                    'source/img/bg.jpg',
                    'source/img/bg-start-page.png',
                    'source/img/modal-bg-start-page.png',
                    'source/img/contacts/bg-contacts.png',
                    'source/img/contacts/arrow-down.png',
                    'source/img/contacts/arrow-up.png',
                    'source/img/contacts/contacts-hover.png',
                    'source/img/contacts/reference-2-block-bg.png',
                    'source/img/elements/arrow-left.png',
                    'source/img/elements/arrow-left-hover.png',
                    'source/img/elements/arrow-right.png',
                    'source/img/elements/arrow-right-hover.png',
                    'source/img/elements/btn-hover.png',
                    'source/img/elements/close-btn.png',
                    'source/img/elements/close-btn-hover.png',
                    'source/img/elements/home.png',
                    'source/img/elements/home-hover.png',
                    'source/img/elements/modal-bg.png',
                    'source/img/elements/read-letters-hover.png',
                    'source/img/elements/reference.png',
                    'source/img/elements/reference-hover.png',
                    'source/img/elements/write-comment-hover.png',
                    'source/img/memos/bg-memo.png',
                    'source/img/quiz/choose/choosing-character-bg.png',
                    'source/img/quiz/choose/friend.png',
                    'source/img/quiz/choose/friend-hover.png',
                    'source/img/quiz/choose/helper.png',
                    'source/img/quiz/choose/helper-hover.png',
                    'source/img/quiz/choose/lgbtk-girl.png',
                    'source/img/quiz/choose/lgbtk-girl-hover.png',
                    'source/img/quiz/choose/parent.png',
                    'source/img/quiz/choose/parent-hover.png',
                    'source/img/quiz/comments/comments-bg.png',
                    'source/img/quiz/final/feedback-bg.png',
                    'source/img/quiz/final/leave-comment-hover.png',
                    'source/img/quiz/final/send-developers-hover.png',
                    'source/img/quiz/sources/options.png',
                    'source/img/quiz/sources/sources-bg.png',
                    'source/img/quiz/sources/title-bg.svg',
                    'source/img/quiz/start-screen/start-bg.png',
                    'source/img/quiz/start-screen/start-btn.png',
                    'source/img/quiz/strategies/coping-btn.png',
                    'source/img/quiz/strategies/coping-btn-hover.png',
                    'source/img/quiz/strategies/friend-bg.png',
                    'source/img/quiz/strategies/girl-bg.png',
                    'source/img/quiz/strategies/helper-bg.png',
                    'source/img/quiz/strategies/mutual-aid-btn.png',
                    'source/img/quiz/strategies/mutual-aid-btn-hover.png',
                    'source/img/quiz/strategies/parent-bg.png',
                    'source/img/quiz/strategies/resistance-btn.png',
                    'source/img/quiz/strategies/resistance-btn-hover.png',
                    'source/img/quiz/strategies/survival-btn.png',
                    'source/img/quiz/strategies/survival-btn-hover.png',
                    'source/img/quiz/type-of-violence/active.png',
                    'source/img/quiz/type-of-violence/age-hover.png',
                    'source/img/quiz/type-of-violence/bookmark.png',
                    'source/img/quiz/type-of-violence/bookmark-hover.png',
                    'source/img/quiz/type-of-violence/common-hover.png',
                    'source/img/quiz/type-of-violence/discrimination-hover.png',
                    'source/img/quiz/type-of-violence/home-violence-hover.png',
                    'source/img/quiz/type-of-violence/isolation-hover.png',
                    'source/img/quiz/type-of-violence/kil-hover.png',
                    'source/img/quiz/type-of-violence/openness-hover.png',
                    'source/img/quiz/type-of-violence/orientation-hover.png',
                    'source/img/quiz/type-of-violence/sex-hover.png',
                    'source/img/quiz/type-of-violence/type-of-violence-bg.png',
                    'source/img/quiz/violence-type-btn.png',
                    'source/img/quiz/violence-type-btn-hover.png',
                    'source/img/quiz/sources/sources-about.png'
                ];

                return images;


            }
        }
    }
})();