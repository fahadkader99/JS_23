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


// 




