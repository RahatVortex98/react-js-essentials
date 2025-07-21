// Dom = Document Object Model =>>

// Object{} that represent a page you see in web browser and provide an API to interact with it.
// Web browser constructs the DOM when it loads an HTML Document and structure all elements like a TreeWalker

// 🔧 API Interaction Example:
// Select an element by ID
// const heading = document.getElementById('main-title');

//  Change the text
// heading.textContent = "Hello, DOM!";

//  Change the style
// heading.style.color = "blue";


// ELement selectors ==> method used to target and manipulate HTML elements they allow
// you to select one or multiple HTML elements from DOM

// 1. document.getElementById()==> single element 
// 2. document.getElementsByClassName() ==> collection 
// 3. document.getElementsByTagName() ==> collection
// 4. document.querySelector() ==> single elment
// 5. document.querySelectorAll() ==>nodelist

// | Selector Method            | Returns        | Can Style Directly? |
// | -------------------------- | -------------- | ------------------- |
// | `getElementById()`         | Single Element | ✅ Yes               |
// | `getElementsByClassName()` | HTMLCollection | ❌ Loop required     |
// | `getElementsByTagName()`   | HTMLCollection | ❌ Loop required     |
// | `querySelector()`          | First Match    | ✅ Yes               |
// | `querySelectorAll()`       | NodeList       | ❌ Loop required     |




// 1. document.getElementById()==> single element 

const myHeading = document.getElementById('myheading')

myHeading.style.backgroundColor = 'yellow'
myHeading.style.textAlign = 'center'


// 2. document.getElementsByClassName() ==> collection 

const fruits = document.getElementsByClassName("fruits")

// fruits[0].style.backgroundColor='red'

for(let fruit of fruits){
    fruit.style.backgroundColor='Blue'
}

// 3. document.getElementsByTagName() ==> collection

const h4elements =document.getElementsByTagName('h4')

// h4elements[1].style.backgroundColor = 'aqua'

for(let h4element of h4elements){
    h4element.style.backgroundColor = 'aqua'
}

Array.from(h4elements).forEach(h4element=>{
    h4elements[1].style.backgroundColor = 'Black'
})


// 4. document.querySelector() ==> single elment

const food = document.querySelector(".fruits")
const food2 = document.querySelector("li")

food.style.backgroundColor = "green"
food2.style.backgroundColor = "green"


// 5. document.querySelectorAll() ==>nodelist


const bucket = document.querySelectorAll(".fruits");

bucket.forEach(item => {
    item.style.fontWeight = 'bold';
});
