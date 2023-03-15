class Bank {
    /*
     Method Over riding: 
     When a child class method override parent class method & child class method can modify the implementation of the overridden method
    */

    roi() {
        return 0;
    }

}

class CHASE extends Bank {

    roi() {
        return 10.5;
    }
}

class TD extends Bank {

    roi() {
        return 12.5;
    }
}

td = new TD();              // object of TD
console.log(td.roi());

chase = new CHASE();        // object of CHASE
console.log(chase.roi());

