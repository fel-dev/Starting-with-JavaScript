"use strict";
var tick = (function () {
    var closure = 0;
    return function () {
        return closure++;
    };
})();
// can't change variable closure from outside, but can read it
console.log(tick());
console.log(tick());
console.log(tick());
