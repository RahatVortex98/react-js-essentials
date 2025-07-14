// A method is a function defined inside an object or a class.

// 🔹 In an Object:


const person = {
  name: "Harry",
  
  greet() {                     // Method syntax (shorter)
    console.log(`Hi, I am ${this.name}`);
  }
};

person.greet(); // Hi, I am Harry


// 🔹 In a Class:

class Animal {
  eat() {                       //  Method syntax in class
    console.log("Animal is eating");
  }
}

const dog = new Animal();
dog.eat(); // Animal is eating
