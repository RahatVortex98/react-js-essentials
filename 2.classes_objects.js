// In OOP, a class is an extendable program template for creating objects.
// It defines initial properties (data) and methods (behavior).

// For example:
// Class  ===> Blank FORM Template
// Object ===> A Filled FORM (with data)


class RailwayForm{
    submit(){
        console.log(this.name+"form submitted")
    }
    cancel(){
        console.log(this.name+"form is canceled")
    }
    fill(givenname){
        this.name = givenname
    }
}

let harry = new RailwayForm()
harry.fill("harry")
let rohan = new RailwayForm()
rohan.fill("rohan")

harry.submit()
rohan.cancel()