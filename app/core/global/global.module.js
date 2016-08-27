'use strict';

angular.module('core.global', []).
run(function() {
    window.lib = {
        random: function(min, max, round = true) {
            var output = Math.random() * (max - min + 1) + min;
            if (round) { output = output | 0 };
            return output;
        }
    }
})
