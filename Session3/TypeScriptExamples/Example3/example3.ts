export class Person {
    firstName: string;
    lastName: string;
    age: number;
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

var p = new Person();
p.firstName = 'Ali';
p.lastName = 'Rezaee';
p.age = 12;

console.table(p);
 