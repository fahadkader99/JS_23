class Animal {

    color;
    constructor(color) {

        this.color = color;
    }

    print() {
        console.log("Color: " + this.color);
    }
}

class Dog extends Animal {
    //color;                    -- color is already defined in parent class so no need ot define it twice
    food;
    constructor(color, food) {

        super(color);                   // SUPER - used to invoke parent class constructor
        this.food = food;
    }

    eat() {
        console.log("Eating: " + this.food);
    }

    display() {
        this.print();               // parent class method
        this.eat();                 // child class method
    }
}

dog = new Dog("Black", "Mango");
dog.display();

