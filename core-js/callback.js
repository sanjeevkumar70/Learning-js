// a callback is a function passes as an argument to another function and it is called later , usually after some task is completed 

// in simple words
// i will call u back when i am done 

function shree(a, callback) {
    console.log("hello" + a);
    callback();
}
function raj() {
    console.log("there")
}
shree("sanjeev", raj);

// why callback are used?
// handle asynchronus operation
// execute code after something finished
// avoid blocking the main thread

// callback with settimeout => 

setTimeout(() => {
    console.log("hello world")
}, 2000);

// setTimeout(()=>{

// })

// callback with event
// var a = document.getElementById("mybutton");
// a.addEventListener("click", () => {
// console.log("clicked");
// }
// )

// callback with array
var arr=[1,2,7,5,9];

arr.map((item,index,array)=>{
    console.log(item,index,array);
})