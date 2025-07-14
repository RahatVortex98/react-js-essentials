// allows an iterable such an array or string to be expanded in places where 
// zero or more arguments are expected.

// In an object literal, the spread syntax enumerates the properties of an object 
// and adds the key-value pairs to the object being created

// means it converts an array to object giving properties and their value

let arr = [1, 2, 3, 4, 5, 9]
let obj = { ...arr }  // 🔸 array elements become properties: {0:1, 1:2, 2:3, ...}
console.log(obj)      // ➡️ { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 9 }

let fruits = ['apple', 'banana', 'grapes']
let bucket = { ...fruits }  // 🔸 same concept: keys are indexes
console.log(bucket)         // ➡️ { '0': 'apple', '1': 'banana', '2': 'grapes' }

let obj1 = {
    name: "Harry",
    company: "XYZ"
}

console.log({ ...obj1 })  // 🔸 Clones obj1: { name: 'Harry', company: 'XYZ' }

console.log({ ...obj1, name: "john" }) 
// 🔸 Overwrites the 'name' key during spreading
// ➡️ Output: { name: 'john', company: 'XYZ' }
