'use strict';

angular.module('sos')
    
    .controller('MainCtrl', MainController);

function MainController() {

    var self = this;

    self.contactsActive = false;
    self.remindersActive = false;


    self.showContacts = function () {
        self.contactsActive = true;
    };


    self.showReminders = function () {
        self.remindersActive = true;
    }

}