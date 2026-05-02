let myPromise=new Promise((resolve, reject) =>{
    let success=true
    if(success){
        resolve("Task has completed !!")
    }else{
        reject("Task has failed")
    }
})
// Execute Promise
myPromise.then((result) =>{
    console.log(result);
}).catch((error)=>{
    console.log(error);
})

