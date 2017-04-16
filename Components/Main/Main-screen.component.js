(function () {
    'use strict';

    angular
        .module('components')
        .component('mainScreen', {
            templateUrl: 'Components/Main/Main-screen.html',
            controller: 'mainScreen'
        })
        .controller('mainScreen', mainScreen);


    function mainScreen(ngDialog, ImagesService){
        let $ctrl = this;

        $ctrl.images = ImagesService.getImages();

        $ctrl.clickToOpen = function() {
            ngDialog.open({
                appendTo: '.main-screen',
                controller: 'Popup',
                template: 'Data/Template-Main-Page.html'
            });
        };

        this.$onInit = function () {
            $ctrl.loadImages($ctrl.images);
        };

        $ctrl.loadImages = function(images) {

            let loader = function (src) {
                return new Promise(function (resolve, reject) {
                    let img = new Image();
                    img.onload = function () {
                        // resolve the promise with our url
                        resolve(src);
                        // console.log(src + ' - init');
                    };
                    img.onerror = function (err) {
                        reject(err);
                    };
                    img.src = src;
                });
            };

            // return an array of image-loading promises
            return images.map(function (image) {
                return loader(image);
            });
        };

    }
})();