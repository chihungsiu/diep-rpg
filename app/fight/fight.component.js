'use strict';

angular.
module('fight')
    .component('fight', {
        templateUrl: 'fight/fight.template.html',
        controller: ['Tank', function PhoneListController(Tank) {

            console.log(Tank)
                // console.log(getTank());
            this.word = 'fight word';
        }]
    })
