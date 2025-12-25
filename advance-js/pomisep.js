const myPromise= new Promise(resolve,reject)=>
{
    let success= true;
    if(success)
        
        {
            resolve("task is completed!");
        }
        else
        {
            reject("task is rejected!");
        }
        myPromise
        .then(result=>console.log(result));
        .then(error=>console.log(error));
}