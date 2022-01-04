export class Person {
    firstName: string;
    LastName: string;
    getFullName(): string {
        return `${this.firstName} ${this.LastName}`;
    }
}
var num1: number = 12;
var person = new Person();
person.firstName = 'Ali';
person.LastName = 'Hosseini';
console.log('Hello World!');
console.log(num1);
console.table(person);
let text = "       Hello World!        ";
let result = text.trim();
let num: any = 12;
let result1 = num.trim();
console.log(result);