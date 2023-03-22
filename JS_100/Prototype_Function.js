function student() {
    this.name = "John";             // this is representing the object / function
    this.gender = "male";

}

// prototype    - adding to the functions outside the function 
student.prototype.age = 30;     // now because of this prototype AGE will remain available to all the object ref variables

stu1 = new student();
console.log(stu1.name);
console.log(stu1.gender);
console.log(stu1.age);
console.log();


stu2 = new student();
console.log(stu2.name, stu2.gender, stu2.age);

// add new property to the class