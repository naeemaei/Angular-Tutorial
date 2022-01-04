"use strict";
exports.__esModule = true;
exports.Person = void 0;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.LastName);
    };
    return Person;
}());
exports.Person = Person;
var num1 = 12;
var person = new Person();
person.firstName = 'Ali';
person.LastName = 'Hosseini';
console.log('Hello World!');
console.log(num1);
console.table(person);
var text = "       Hello World!        ";
var result = text.trim();
var num = 12;
var result1 = num.trim();
console.log(result);
