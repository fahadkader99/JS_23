class Student {
    /**
     * Encapsulation - we are wrapping up the data along with the function in a single unit, not letting user to work with the class variables, instead using setters & getters
     */

    constructor() {                 // constructor -> is used to assign class variables
        let name, marks;            // accessing these variables through methods (setters & getters) -> Encapsulation
    }

    // Setters & Getters

    getName() {
        return this.name;
    }

    setName(sName) {
        this.name = sName;
    }

    getMarks() {
        return this.marks;
    }
    setMarks(mark) {
        this.marks = mark;
    }
}

// Create object & access with the setters, getters
let stu = new Student();

// setters
stu.setName("Fahad");
stu.setMarks(33);


// getters
console.log(stu.getName());
console.log(stu.getMarks());