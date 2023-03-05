// create an object
var person = {
    name: "Fahad",
    age: 30,
    gender: "M"

};

console.log(person);
console.log(person.age, person.gender);
console.log();

// access the properties
console.log(person.name);
console.log(person["age"]);
console.log(person["gender"]);
console.log();

// add new property
person.height = 5.5;
console.log(person);
console.log();

// update a property
person.age = 33;
console.log(person.age);
console.log();

// delete a property
// delete person.age;
//console.log(person);

// looping the object - For In loop

for (let x in person) {
    console.log(x);
}
console.log();

for (let a in person) {
    console.log(a + " = " + person[a]);
}
console.log();


//Method inside an object

let employee = {
    name: "A",
    id: 10,
    job: "Engineer",
    salary: 5000,
    bonus: function Bonus() {
        return ((this.salary * 10) / 100);
    }

};

// console.log(employee);
// console.log(employee["job"]);
console.log(employee.bonus());