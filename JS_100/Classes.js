
class Student {                     // class - logical entity

    constructor(id, sName, grade) {
        this.id = id;
        this.sName = sName;
        this.grade = grade;

        //this.printInfo();
    }

    // setDetails(id, sName, grad) {                           // variables in a method
    //     this.id = id;
    //     this.sName = sName;
    //     this.grade = grad;
    // }

    printInfo() {
        console.log(this.id + " " + this.sName + " " + this.grade);
    }
}

let stu = new Student(101, "Fahad", "A");                // Creating object of the student class + using constructor

//stu.setDetails(10, "Fahad", "Male");
stu.printInfo();
console.log();

let stu2 = new Student(102, "Jahan", "B");              // Object - is physical entity
stu2.printInfo();
console.log();

let stu3 = new Student(103, "Kader", "C ");
stu3.printInfo();
console.log();