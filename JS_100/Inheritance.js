class A {
    a = 100;

    display() {
        console.log(this.a);
    }


}

class B extends A {

    b = 200;
    c = 300;

    show(b) {
        console.log(this.b);
    }

    display() {
        console.log(this.c);
    }


}

let one = new B();
one.display();
one.show();
one.display();

