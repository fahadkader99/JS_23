// Create an object

var person1 =
{
    firstName: "Fahad",
    lastName: "Kader",
    age: 32,
    gender: "Male"

}
console.log(person1);

// Access the object
console.log(person1["firstName"]);                      // syntax 1
console.log(person1["age"]);

// or
console.log(person1.gender);                            // syntax 2
console.log(person1.firstName, person1.lastName);

// Add new property to the object

person1.height = 20;                                    // syntax 1
person1["weight"] = 60;                                 // syntax 2
console.log(person1.height);
console.log(person1["weight"]);
console.log(person1);
console.log();

// Update existing property
person1.age = 30;
person1["weight"] = "70kg";
console.log(person1);
console.log();

// Remove property from the object
//delete person1.gender;
delete person1["gender"];
//console.log(person1.gender); 
console.log(person1);
console.log();


// Iterate the property from the object.
console.log("*********** For In Loop **************");
console.log();

for (let a in person1) {
    // console.log(a);
    // console.log(person1[a]);
    console.log(a + " : " + person1[a]);
}







