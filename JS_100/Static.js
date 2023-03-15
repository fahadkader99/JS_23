class Test {

    static a = 100;         // static variable
    b = 200;                // instance | class variables | non-static variable


    static m1() {
        console.log("This is M1 Static method.");
    }

    m2() {
        console.log("This is M2 non-static method. ");
    }


}

// we can directly access static variables and methods - using class name
console.log();
console.log(Test.a);
console.log(Test.b);        // Non-static variable can't be accessed through class, need to create object
console.log();

Test.m1();
//Test.m2();                  // Non-static & throw error


// Create object & access non-static properties.
let test = new Test();
console.log();

console.log(test.b);
test.m2();