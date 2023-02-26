// Create a Date object. 
let d = new Date();
console.log(d);
console.log();


// Date | month | year
let currentDate = d.getDate();              // 1-31
let currentMonth = d.getMonth();            //0-11 [jan is 0 & Dec - 11]
const currentYear = d.getFullYear();

console.log(currentDate + " / " + (currentMonth + 1) + " / " + currentYear);
console.log();


// hours | min | sec
let hours = d.getHours();               // 0 - 23
let min = d.getMinutes();               // 0 - 59
let sec = d.getSeconds();               // 0 - 59

console.log(hours + " : " + min + " : " + sec);
console.log();
