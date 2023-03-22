class Shape {

    draw() {
        return "I am generic shape";
    }
}

class Square extends Shape {

    draw() {
        return "I am Square";
    }
}

class Circle extends Shape {

    draw() {
        return "I am Circle";
    }
}

let s = new Shape();
console.log(s.draw());

let s1 = new Square();
console.log(s1.draw()); 

let s2 = new Circle();
console.log(s2.draw());
