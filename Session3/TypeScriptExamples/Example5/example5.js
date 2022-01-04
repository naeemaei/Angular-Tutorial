var customer = {
    firstName: 'Ali',
    lastName: 'Rezaee',
    age: 12,
    getFullName: function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    }
};
console.table(customer);
console.log(customer.getFullName());
