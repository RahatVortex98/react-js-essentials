// Constructor ==> special method for defining the properties and methods of objects
//                  basically this is what when we can reuse of it

function Car(name, model, year, color) {
    this.name = name;       // 🔸 property
    this.model = model;     // 🔸 property
    this.year = year;       // 🔸 property
    this.color = color;     // 🔸 property

    // 🔸 method (function inside the object)
    this.drive = function () {
        console.log(`You drive ${name}`); // 🟠 Note: using `name` directly works, but better to use `this.name`
    }
}

const car1 = new Car("Toyota", "GT-86", 1998, "Black"); // 🛠️ creates a new object from the Car constructor

console.log(car1.name);   // ➡️ "Toyota"
console.log(car1.model);  // ➡️ "GT-86"
console.log(car1.year);   // ➡️ 1998

car1.drive();             // ➡️ "You drive Toyota"


// 🔹 Car ==> is the constructor function (reusable blueprint)
// 🔹 (name,model,year,color) ==> parameters
// 🔹 this.name, etc. ==> instance properties
// 🔹 drive() ==> instance method
