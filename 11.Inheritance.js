// Allows a new class to inherit properties and methods from an existing class (parent --> class)
// this 2 class has parent child relationship
// helps code reuseability

class Animal {
    alive = true;  // 🔸 Property shared by all animals

    eat() {
        console.log(`The ${this.name} is eating`);
    }

    sleep() {
        console.log(`The ${this.name} is sleeping`);
    }
}

// 🐰 Rabbit inherits from Animal and adds its own method
class Rabbit extends Animal {
    name = "rabbi";

    run() {
        console.log(`This ${this.name} is running`);
    }
}

// 🐟 Fish inherits from Animal and adds its own method
class Fish extends Animal {
    name = "fishu";

    swim() {
        console.log(`This ${this.name} is swimming`);
    }
}

// 🦅 Hawk inherits from Animal and adds its own method
class Hawk extends Animal {
    name = "hawkie";

    fly() {
        console.log(`This ${this.name} is flying`);
    }
}

// 🔸 Creating instances of each child class
const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

// 🔸 Inherited methods from Animal class
rabbit.eat();    // The rabbi is eating
rabbit.sleep();  // The rabbi is sleeping

// 🔸 Method unique to Rabbit
rabbit.run();    // This rabbi is running

//Animal is a parent Class
//rabbit, fish, hawk are child Classes
//Animal has shared methods: eat() and sleep()
//Rabbit, Fish, Hawk have their own unique methods: run(), swim(), fly()

// By using `extends`, Rabbit, Fish, and Hawk inherit from the Animal Class — this is called inheritance!
