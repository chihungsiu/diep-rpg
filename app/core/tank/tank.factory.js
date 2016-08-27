'use strict';

angular.
module('core.tank').
factory('Tank', function() {
    var ran = lib.random;
    var tank = {
        stat: {
            hr: ran(2, 5),
            mh: ran(2, 5),
            bod: ran(2, 5),
            bs: ran(2, 5),
            bp: ran(2, 5),
            bud: ran(2, 5),
            mo: ran(2, 5)
        },
        class: 'basic',
        team: 'blue'
    };

    tank.hp = tank.stat.mh;
    return tank;
})
