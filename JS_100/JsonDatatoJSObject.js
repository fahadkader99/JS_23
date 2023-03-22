// sample json array
let text = '{ "employee" : [' +
    '{ "firstName" : "John", "lastName" : "Doe"}, ' +
    '{ "firstName" : "Anna", "lastName" : "Smith"}, ' +
    '{ "firstName" : "Peter", "lastName" : "Jones"} ]}';


// convert this above json in JS object
// 1st convert the Json into js object & then from that object we can extract the data

let jsObj = JSON.parse(text);           // converting json data into js object

console.log(jsObj.employee[0].firstName, jsObj.employee[0].lastName);       // now access those values from the json
console.log();

console.log(jsObj.employee[1].firstName, jsObj.employee[1].lastName);
console.log();

console.log(jsObj.employee[2].firstName, jsObj.employee[2].lastName);
console.log();







