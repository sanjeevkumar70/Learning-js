const prom1 = new Promise((resolve, reject) => {
    let data = false;
    if (data) {
        resolve("promise1 is running...")
    } else {
        reject("Promise1 is rejected..")
    }
})
const prom2 = new Promise((resolve, reject) => {
    let data = true;
    if (data) {
        resolve("promise2 is running...")
    } else {
        reject("Promise2 is rejected..")
    }
})
const prom3 = new Promise((resolve, reject) => {
    let data = true;
    if (data) {
        resolve("promise3 is running...")
    } else {
        reject("Promise3 is rejected..")
    }
})


// Promise.all([prom1, prom2, prom3])
// .then(values=>console.log(values))
// .catch(err=>console.log(err))


// Promise.any([prom1, prom2, prom3])
//     .then(values => console.log(values))
//     .catch(err => console.log(err))

// Promise.allSettled([prom1, prom2, prom3])
//     .then(values => console.log(values))
//     .catch(err => console.log(err))

// Promise.race([prom1, prom2, prom3])
//     .then(values => console.log(values))
//     .catch(err => console.log(err))