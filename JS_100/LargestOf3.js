// find the largest of 3 number

var a = 100, b = 200, c = 30;
var max = 0, maxx = 0, maxxx = 0;


if (a > b && a > c) {
    max = a;
}
else if (b > a && b > c) {
    maxx = b;
} else {
    maxx = c;
}

if (max > maxx) {
    maxxx = max
} else {
    maxxx = maxx;
}
console.log(maxxx);


// Ternary 

/*
max = (a > b ? a : b);
maxx = (max > c ? max : c);
console.log(maxx);
*/
