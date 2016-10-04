'use strict';

angular.module('sos')
    
    .controller('MainCtrl', MainController);

function MainController() {

    var self = this;

    self.contactsActive = false;
    self.remindersActive = false;
    self.contactsBg = false;
    self.remindersBg = false;
    self.firstBg = true;


    self.showContacts = function () {
        self.contactsActive = true;
        self.contactsBg = true;
        self.firstBg = false;
    };


    self.showReminders = function () {
        self.remindersActive = true;
        self.remindersBg = true;
        self.firstBg = false;
    }

}