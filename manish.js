const person = {
    firstName: "Manish",
    lastName: "Karki",
    age: 14,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());