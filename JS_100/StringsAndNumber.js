let a = "Welcome";
//let b = new String("Welcome");
console.log();


// charAt() - based on index can pickup any char
console.log(a.charAt(3));
console.log();


// concat() - can concat 2 or more strings
console.log(a.concat(" to - " + 2023).concat(" !!! "));
console.log();


// Replace() - can replace specific char or string from the main string
let c = "book 22";
console.log(c.replace("book", "Apple"));
console.log();


// Substring() - get the portion of the string based on index
let d = "Ashikul";
console.log(d.substring(2));
console.log(d.substring(1, d.length - 1));
console.log(d.length);
console.log();


// ToLowerCase & ToUpperCase
console.log(d.toLowerCase());
console.log(d.toUpperCase());
console.log();


// Split() - split the string into multiple parts - returns Array
let e = "Welcome to New York";
let arr = e.split(" ");
console.log(arr);
console.log(arr[0]);
console.log(arr[3]);
console.log();


// Trim() - trim the spaces before & after the string
let f = "   Fahad    ";
console.log(f.trim());
console.log(f.replaceAll("Fahad", "Kader"));
console.log();





/*

Number - methods

*/

// number can be assigned in 2 way
let g = 100;
let h = new Number(200);


// Int or exponentianl
let i = 102.75;
let j = 10e2;
console.log(i + " " + j);


// isInteger();
console.log(Number.isFinite(f));            // string > so will return false;
console.log(Number.isInteger(j));           // int > will return true;
console.log();

let k = 2 + " A ";                          // both will return false > since they have sting in it. Just like java if there is any sting the data type will be considered as String
let l = "A " + 2;
console.log(Number.isInteger(k));
console.log(Number.isInteger(l));
console.log();



// parseInt() - convert sting into number
let m = "222";
console.log(typeof (m));

let n = Number.parseInt(m);                 // converting into Number from Sting & saving into variable
console.log(typeof (n));
console.log();



// parseFloat();
let o = "11.223";
console.log(typeof (Number.parseFloat(o)));
console.log();


// toString() - converts number to String
console.log(typeof (Number.toString(g)));
console.log();


// valueOF();       Number + String
let p = 500;
console.log(p.valueOf());
console.log();

// let q = "Fahad";
// console.log(q.valueOf());


// toExponential() - converts a number into String & returns in exponential format
p = 10;
console.log(p.toExponential(2));
console.log();


// toFixed() - round up a number to nearest hight or lowest fixed point
let r = 2.22;
console.log(r.toFixed());







