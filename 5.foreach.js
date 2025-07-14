// 📌 Calls a function once for each array element
const num = [1, 5, 6, 8, 9];

// 🔁 Classic FOR LOOP — gives full control over index
for (let i = 0; i < num.length; i++) {
    console.log(num[i]); // ➡️ Logs each element
}

// 🔁 forEach — modern loop, great for simple element-by-element processing
num.forEach((element) => {
    console.log(element * element); // ➡️ Logs the square of each element
});

// 🔄 Converting string (or any iterable) into an array
let name = "harry";
let arr = Array.from(name); // ['h', 'a', 'r', 'r', 'y']
console.log(arr); // ➡️ Logs the array version of the string

// 🔁 for...of — clean syntax for looping over values in an array
const fruits = ["banana", "apple", "grapes"];

for (let i of fruits) {
    console.log(i); // ➡️ Logs each fruit
}


// | Loop Type      | Best For                                | Can Access Index                  |
// | -------------- | --------------------------------------- | --------------------------------- |
// | `for`          | Full control (start, stop, step)        | ✅ Yes                             |
// | `forEach()`    | Simple element-by-element logic         | ✅ Yes (with 2nd param)            |
// | `for...of`     | Clean value iteration (arrays, strings) | ❌ No (use `.entries()` if needed) |
// | `Array.from()` | Convert iterable → array                | —                                 |
