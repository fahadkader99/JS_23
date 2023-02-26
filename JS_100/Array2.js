// create an array

let names = new Array();
names[0] = "ABC";
names[1] = 112233;
names[2] = "XYZ";

console.log(names);
console.log();

let person = new Array("Fahad", "Kader", 123);
person[3] = "Jahan";
console.log(person);

// Looping
for (let i = 0; i < person.length; i++) {
    console.log(person[i]);
}
console.log();


// create an object & insert it in array

let arr = new Array("Fahad", 1, "Kader", 2, "Jahan", names);
console.log(arr);
console.log();

// Store object in JS array

let unknown = new Array("XYZ", 22, 5.6, "ASDF");
let person2 = {
    name: "Esrat",
    age: 30,
    gender: "women"
};

//console.log(person2);
unknown[4] = person;                                        // adding an existing array to the new array
unknown[5] = person2;                                      // adding an object to the new array
console.log(unknown);
console.log();


// array with array & object in it

let myArray = new Array(person, person2);                   // this array contains an array & 1 object in it
console.log(myArray);
console.log(myArray[1]);
console.log(myArray.length);
console.log();



// Looping array - For loop

for (let i = 0; i < unknown.length; i++) {
    console.log(unknown[i]);
}
console.log();


// Looping array - For Off Loop

for (let x of unknown) {                        // repeats depending on the length of the array dynamically
    console.log(x);
}
console.log();

// looping object - For In Loop

for (let x in person2) {
    console.log(x + " = " + person2[x]);
}
console.log();

// find the type of data / variable
console.log(typeof person);
console.log(typeof person2);
console.log(typeof myArray);
console.log();

// Find out variable is Array or Not
console.log(Array.isArray(myArray));














