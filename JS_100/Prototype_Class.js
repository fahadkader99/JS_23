class Employee {

    constructor(id, name) {
        this.id = id;               // this representing class variable
        this.name = name;
    }



}

// prototype - add new property to the class using prototype - Outside the class
Employee.prototype.salary = 5000;       // this new property will remain same for all the new / old object


// Add function to the class - using prototype
Employee.prototype.display = function () {                          // new function is added to the class
    console.log(this.id + " " + this.name + " " + this.salary);
}


// Obj - 1
emp1 = new Employee(10, "Fahad");
emp1.display();
console.log();

// Obj - 2
emp2 = new Employee(20, "Kader");
emp2.display();


 