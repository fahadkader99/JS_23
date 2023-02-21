
// Arrays
/*
let names = new Array();
names[0] = "fahad";
names[1] = "Kader";
names[2] = "Jahan";
names[3] = 20;

console.log(names);
*/

/*
let name = new Array("Fahad", "Kader", 20, "Jahan");
console.log(name);
*/

/*
let name = ["Fahad", 20];
console.log(name);
*/

/*
let number = new Array();

for (let i = 1; i <= 5; i++) {
    number[i] = i;
}
console.log(number);
*/


let arr = new Array(10, 20, 30, 40, 50);

console.log(arr[arr.length - 1]);

// change array elements with different data type.
arr[0] = 5;
arr[1] = "Fahad";
arr[2] = 3.5;
console.log(arr);
console.log();


// Array with different data type
console.log("*********** Different Data type in Array *************");

let data = new Array("Fahad", 22, false, 2.2225);
console.log(data);



// Objects in the Array.
console.log("*********** Objects In Array *************");


let person = {
    name: "Jahan",
    age: 30,
    gender: "Male"
};

data[4] = person;
console.log(data);