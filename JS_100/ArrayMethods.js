// array methods
//let fruit = new Array();
let fruits = ["Banana", "Orange", "Apple", "Mango", "Lemon"];

// toString - methods
let a = fruits.toString();
console.log(a);
console.log();


// join - also converts into string but can pass parameters
let b = fruits.join(" | ");
console.log(b);
console.log();


// pop() - remove the last element from the array & also return the removed element
let c = fruits.pop();
console.log(c);
console.log(fruits);
console.log();


// push() - add a new element to the array at the end.
console.log(fruits.push("Peach"));
console.log(fruits);
console.log();


// length - returns the length / size of array
console.log(fruits.length);
console.log();


// shift() -  removes the 1st element & moves other element to lower index
console.log(fruits.shift());
console.log(fruits);
console.log(fruits.length);
console.log();


// unshift() - adds a new element to the array at the beginning
console.log(fruits.unshift("Parsemon"));
console.log(fruits);
console.log();


// Delete element from array - by index only
// delete fruits[0];
// console.log(fruits);


// Concat() -   Merging 2 or more arrays
let arr1 = [10, 20, 30];
let arr2 = ["A", "B"];
let arr3 = arr1.concat(arr2);
console.log(arr3);
console.log();


// Slice() - can take beginning & ending or only beginning index. when passing 2 index, if will not get the ending index
let num = [1, 2, 3, 4, 5, 6, 7];
let d = num.slice(1, 4);
console.log(d);
console.log();


// Sort() - sort the elements in the array in Alphabetically or Ascending 
let number = [5, 4, 3, 2, 1];
number.sort();
console.log(number);                // sort ascending
fruits.sort();
console.log(fruits);                // sort alphabetically
console.log();


// reverse() - reversing existing or source array
let abc = new Array(1, 2, 3, 4, 5);
abc.reverse();                          // reversing
console.log(abc);
abc.sort();                             // sorting       
console.log(abc);
