// this = is a keyword refer to the object where THIS is used on the context .

// person.name = this.name

// person ==> object 
// .name ==> property 
// and this in here replaced the person

// This keyword doesn't work with arrow function


const person1={
    name: "Patrick",
    favFood: "Burger",

    info: function()
    {
        console.log(`Hi i am ${this.name} and my favourite food ${this.favFood}`)
    },

}

person1.info();


// person1 ==> object
// .name, .favFood ==> properties
// info() ==> method
// this.name ==> refers to person1.name (because 'this' is person1 in this context)
