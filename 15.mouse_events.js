//Event listner = listen for specific events to create interactive web pages 
// events: click,mouseover,mouseout
// addEventListener(event,callback)
 //callback is a function
// event.target refers to the element that triggered the event (in this case, #myBox).

 const myBox = document.getElementById('myBox')


// normal function


//  function changeColor(event){
//     event.target.style.backgroundColor = "tomato"
//  }
//  addEventListener("click",changeColor)


myBox.addEventListener("click",event=>{
    event.target.style.backgroundColor="tomato"
})
myBox.addEventListener("mouseover",event=>{
    event.target.textContent ="awww"
})
myBox.addEventListener("mouseout",event=>{
    event.target.textContent ="suiiiii"
})