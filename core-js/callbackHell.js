// callbackhell happens when many nested callbacks are used, making code hard to read ,debug and maintain
//  it usuallly appears in asynchronus js
// when asynchronus operation depends on previous async results , callback get nested inside callbacks

setTimeout(() => {
    console.log("step:1")
    setTimeout(() => {
        console.log("step:2")

        setTimeout(() => {
            console.log("step:3")

            setTimeout(() => {
                console.log("step:4")

            }, 4000);
        }, 3000);
    }, 2000);
}, 1000);

//  disadvantage- deep nesting, hard to read, difficult to error handling, tight coupling(making change risky), poor scability

// real world exampple

loginuser(user, () => {
    getuserprofile(userid, (profile) => {
        getorder(profile.id, (order) => {
            processorder(order, () => {
                console.log("ur order is completd");
            })
        })
    })
})