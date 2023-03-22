/*
// variable
let a = 200;
var b = "fahad";
const t = 2.23;

console.log(t);
console.log();

// typeOf()
console.log(typeof (a));
console.log();


class Math {
    // if statement
    printNum(a) {
        if (a < 100) {
            console.log("1st block");
        } else if (a >= 100 && a < 200) {
            console.log("2nd block");
        } else if (a > 200 && a < 500) {
            console.log("3rd block");
        }
    }

    switchMethod(num) {

        switch (num) {
            case 1: (num > 0 && num < 100); console.log("1"); break;
            case 2: (num > 100 && num < 200); console.log("2"); break;
            case 3: (num > 200 && num < 300); console.log("3"); break;
            default: console.log("Try again");
        }
    }

    //c = 1;

    printWhile(c) {
        do {

            console.log(c);
            c++;
        } while (c <= 100) {
        }
    }
    forLoop(num) {
        for (let i = 0; i <= num; i++) {
            console.log(i);
        }
    }


}

a = new Math();
a.printNum(233);
a.switchMethod(220);
console.log();
a.printWhile(79);
console.log();
a.forLoop(20);
*/

// class Test1 {

//     name;
//     age;
//     gender;
//     id;
//     // create & work with objects
//     constructor(name, age, gender, id) {

//         let person = {
//             name: this.name,
//             age: this.age,
//             gender: this.gender,
//             id: this.id
//         }

//     }

// }


// Object

let person = {
    name: "Fahad",
    age: 30,
    gender: "male"
}
console.log(person.name);           // access the object
console.log(person["age"]);
console.log();

// add new property
person.skin = "brown";
console.log(person);

// update the property of the object
person.age = 31;
console.log(person);

// remove the property
delete person.gender;
console.log(person);

// for in loop to iterating the object
for (let x in person) {
    console.log(x + " = " + person[x]);
}

// ARRAY

let arr = new Array(1, 2, 3, "A", "B", "C");
console.log(typeof (arr));                          // object data type
console.log(arr.length);
for (let x of arr) {
    console.log(x);
}
console.log(arr);

// Date object;
let d = new Date();

let date = d.getDate();
let month = d.getMonth();
let year = d.getFullYear();
let hours = d.getHours();
let min = d.getMinutes();
let sec = d.getSeconds();
console.log(date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec);

// String
let a = "Fahad Kader";
console.log(a.substring(0, 5));

// number
let b = 200;
let c = new Number(300);
console.log(b + " " + c);





