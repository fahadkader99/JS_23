
// 1

/*
function add(a, b) {
    console.log("Adding " + a + " & " + b + " = " + (a + b));
}
function multiply(a, b) {
    console.log("Multiply " + a + " & " + b + " = " + (a * b));
}

add(5, 5);
multiply(6, 6);
*/

// Function with value return

/*
function divide(a , b){
    return ("Divide " + a +" & " + b + " = " +(a / b));
}

let div = divide(10, 50);
console.log(div);
*/

// void function or no arg function

/*
function substraction (a, b){
    console.log(a-b);
}

substraction(100, 50);
*/

function noReturn() {
    let a = 10;
    let b = 20;
    console.log(a + b);
}

noReturn();
console.log();

// Mod void function

function mod() {
    let a = 10;
    let b = 3;

    console.log(a % b);
}

mod();
console.log();

// return a value from non-parameter function

function greet() {
    return ("I am learning JS");
}
console.log(greet());




