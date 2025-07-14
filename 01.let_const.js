// ✅ LET: Can be updated but not re-declared in the same scope
let a = 5;
a = 10;         // ✅ OK
// let a = 20;   // ❌ Error: Cannot re-declare

// ✅ LET is block scoped
{
    let b = 100;
    console.log(b); // 100
}
// console.log(b);  // ❌ Error: b is not defined outside the block

// ✅ CONST: Cannot be updated or re-declared
const harry = 10;
// harry = 20;     // ❌ Error
// const harry = 30; // ❌ Error

console.log(harry); // 10
