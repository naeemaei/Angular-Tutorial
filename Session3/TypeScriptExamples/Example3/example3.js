"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    return Person;
}());
exports.Person = Person;
var p = new Person();
p.firstName = 'Ali';
p.lastName = 'Rezaee';
p.age = 12;
console.table(p);

