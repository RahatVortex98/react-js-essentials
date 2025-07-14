// Arrays are varibles can  be hold more than one value
//Arrays are mutable

// ==> const fruits=["banana","apple","grape"]
// ==> const a1 = [7,"harry",false]


// Accessing Value

// let numbers = [1,2,3,4,5,6]
// console.log(numbers[1]);
// console.log(numbers[5]);
// numbers[6] = 69;
// console.log(numbers[6]);
// console.log(numbers.length);
// console.log(typeof numbers);


// MAP FILTER REDUCE


// Map ==> Creates a new array by performing some operations on each array element
//  basically made new array

let arr =[10,15,30]

let a = arr.map((value,index,array)=>{
    console.log(value,index,array)
    return value + index
})
console.log(a)


//Filter ==> Basically this filter also making new array but with some condition!

let arr2 =[1,5,9,15,20,25]

let b = arr2.filter((a)=>{
    return a<19;
})
console.log(b)


// Reduce ==> Reduce an array into single value

let arr3 = [1,2,3,4,5,6]

let c = arr3.reduce((add1,add2)=>{
    return add1+add2;
})
console.log(c)