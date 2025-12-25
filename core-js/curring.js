//it is a way to write how fun will execute
//function curring is a technique where a function that takes the multiple arguments is transform into sequence of functions is taking one argument
// it is the best example of the closure where all the vsriables are in the own scope
// function add(a, b, c) {
//     return a + b + c;
// }
// console.log(add(10, 20, 30));

function mul(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return a * b * c * d;
            }
        }
    }

}
var z=mul(10)(20)(25)(30);
console.log(z);