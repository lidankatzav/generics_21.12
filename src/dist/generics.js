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
var PalindromeProperty = /** @class */ (function () {
    function PalindromeProperty() {
    }
    PalindromeProperty.prototype.isProperty = function (element) {
        if (typeof element === 'string') {
            return element == element.split('').reverse().join('');
        }
        if (typeof element === 'number') {
            var reverse = 0;
            var temp = element;
            while (temp != 0) {
                reverse = (reverse * 10) + (temp % 10);
                temp = Math.floor(temp / 10);
            }
            return reverse == element;
        }
    };
    return PalindromeProperty;
}());
var Person = /** @class */ (function () {
    function Person(name, id) {
        this.name = name;
        this.id = id;
    }
    return Person;
}());
var PersonPalindromeProperty = /** @class */ (function () {
    function PersonPalindromeProperty() {
    }
    PersonPalindromeProperty.prototype.isProperty = function (element) {
        var palindromeProp = new PalindromeProperty();
        return palindromeProp.isProperty(element.id);
    };
    return PersonPalindromeProperty;
}());
console.log(countElementsByProperty([1, 2, 3, 4, 5], new OddProperty));
console.log(countElementsByProperty([1, 2, 3, 4, 5], new PrimeProperty));
console.log(countElementsByProperty(['kayak', 'hello', 'madam', 'sing', 'redder', 'racecar'], new PalindromeProperty));
console.log(countElementsByProperty([new Person('Lidan', 12321), new Person('Or', 1451), new Person('Lior', 5)], new PersonPalindromeProperty));
// Expected output -->
//      3-3-4-2
