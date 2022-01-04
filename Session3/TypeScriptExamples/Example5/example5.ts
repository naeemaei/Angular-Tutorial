interface IPerson {
    firstName: string;
    lastName: string;
    getFullName: () => string;
}

var customer: IPerson = {
    firstName: 'Ali',
    lastName: 'Rezaee',
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`
    }
}

console.table(customer);
console.log(customer.getFullName());