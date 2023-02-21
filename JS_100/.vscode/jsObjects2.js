// objects with methods

let employee = {

    name: "A",
    id: 101,
    job: "Engineer",
    salary: 5000,
    bonus: function calBonus() {
        return ((this.salary * 10) / 100);
    }
};

console.log(employee);
console.log(employee.bonus());      // return calculated bonus