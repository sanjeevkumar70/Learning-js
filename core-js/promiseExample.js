const myPromise = new Promise((resolve, reject)=>
{
    const success = true;

    if(success){
        resolve("promise resolved ")
    }
    else{
        reject("rejected")
    }
});


myPromise
.then(result=>{
    console.log("then:", result);
})
.catch(error=>{
    console.log("catch:",error);
})
.finally(()=>
{
    console.log("finally:promise finished");
});

//promiseTimeout.js
// function delayedMessage(){
//     return new Promise(){

//     }
// }

