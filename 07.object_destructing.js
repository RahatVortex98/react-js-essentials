// Object==>A collection of related properties and/or methods can represent real world 
// objects(people,product,places)
// object = {key:value
//                function()}

const person = {
    name: "Harry",            // 🔸 Property: name of the person
    age : 27,                 // 🔸 Property: age of the person
    favFood: "burger",        // 🔸 Property: favorite food

    // 🔸 Method: sayHello is a function inside the object
    sayHello: function() {
        // 🔸 `this` refers to the current object (person)
        console.log(`He is ${this.name} and he is ${this.age} years old and his fav. Food ${this.favFood}`)
    }
};
person.sayHello();

// person the==> OBJECT and sayHello==> is a method and name,age,favFood is a==> property



// De Structur Ing = Used to unpack values from an array or properties from an 
// objects into distinct varibles

let arr = [1, 2, 3, 5, 9, 10, 13, 15]  // 🔸 An array with numbers

// 🔸 Destructuring first two elements into a, b
// 🔸 ...rest gathers the remaining values into an array
let [a, b, ...rest] = arr  

let [c, d] = arr // 🔸 Another destructuring pulling out only first 2 elements

console.log(a, b, rest) // ➡️ 1 2 [3, 5, 9, 10, 13, 15]

console.log(c, d)       // ➡️ 1 2



const person1 = {
  name: "Harry",
  age: 27,
  favFood: "burger"
};

const { name, favFood } = person1;
console.log(name);     // "Harry"
console.log(favFood);  // "burger"

//Instead of doing ==>

// const name = person.name;
// const favFood = person.favFood;

// You can do it in one clean line:
// const { name, favFood } = person;
