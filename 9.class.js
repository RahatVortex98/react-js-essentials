// class ==>provide a more stuctured and cleaner way to  work with objects comapred to 
// traditonal constructor functions

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product : ${this.name}`)
        console.log(`Product : ${this.price}`)
    }
}

const Product1 = new Product("Shirt",19.99)

Product1.displayProduct()

//Product ==> object
//method ==> displayProduct