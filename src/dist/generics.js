function countElementsByProperty(array, prop) {
    var arrAfterFilter = array.filter(function (value) {
        return prop.isProperty(value);
    });
    return arrAfterFilter.length;
}
var OddProperty = /** @class */ (function () {
    function OddProperty() {
    }
    OddProperty.prototype.isProperty = function (element) {
        return element % 2 !== 0;
    };
    return OddProperty;
}());
var PrimeProperty = /** @class */ (function () {
    function PrimeProperty() {
    }
    PrimeProperty.prototype.isProperty = function (element) {
        for (var i = 2, s = Math.sqrt(element); i <= s; i++) {
            if (element % i === 0)
                return false;
        }
        return element > 1;
    };
    return PrimeProperty;
}());
var PalindromesProperty = /** @class */ (function () {
    function PalindromesProperty() {
    }
    PalindromesProperty.prototype.isProperty = function (element) {
        return String(element) == String(element).split('').reverse().join('');
    };
    return PalindromesProperty;
}());
console.log(countElementsByProperty([1, 2, 3, 4, 5], new OddProperty));
console.log(countElementsByProperty([1, 2, 3, 4, 5], new PrimeProperty));
console.log(countElementsByProperty(['kayak', 'hello', 'madam', 'sing', 'redder', 'racecar'], new PalindromesProperty));
