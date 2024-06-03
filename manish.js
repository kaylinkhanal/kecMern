const person = {
    firstName: "Manish",
    lastName: "Karki",
    age: 21,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());