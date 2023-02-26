
/*
Variables with var
*/


// multiple line 
var x;              // declaration
x = 10;             // initialization

// single statement (declaration + initialization)
var y = 20;

// single statement with multiple variables
var a = 1, b = 2, c = 3;

// print in the doc
document.write(x);

// print in the console
console.log(y);


/*
Variables with Let
*/

// variables with let
let d = "Fahad Kader";
console.log(d);
document.write("\n" + d);

let e = 101;
console.log(e);
document.write("\n" + e);

// multiple variable in single line
var f = "Fahad", g = "Kader";
console.log(f);
console.log(g);

/*
Diff between var & let
*/

console.log(h);         // -- will give undefined since var is functional scoped
var h = 100;
console.log(h);
h = 200;
console.log(h);


//console.log(i);     // -- give error, let is block scoped & can't access uninitialized variable
let i = 200;
console.log(i);


/*
    variable with const (constant)
*/

const j = 500;      // constant can't be changed or it will throw error
console.log(j);
//j = 300;


