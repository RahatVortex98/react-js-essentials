
//  Promise ==> an object that manages asynchronous operations.Wrap a promise object around {async code}
// pending resolved or reject 
// new Promise((resolve,reject)={
// })


function walkdog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const dogWalked = true;
            if(dogWalked){

                resolve("you walked the dog")

            }
            else{
                reject("you didn't walk the dog")

            }


            resolve("done with dog")
        },1500)
    })
}



function cleancloth(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const clothCleaned = true;

            if(clothCleaned){
                resolve("U cleaned the Cloth")
            }
            else{
                reject("U didn't clean the cloth")
            }



            resolve("done with clean")
        },100)
    })
}


function dostudydog(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            const dogStudy=false;
            if(dogStudy){
                resolve("U did it")
            }
            else{
                reject("U failed")
            }

            resolve("done with study")
        },2500)
    })
}


walkdog().then(value=>console.log(value))
cleancloth().then(value=>console.log(value))
dostudydog().then(value=>console.log(value))

.catch(error=>console.log(error))