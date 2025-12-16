//Call 

const person1 = {
    fname: "Shrestha",
    lname: "Raj",
    fullData: function (age, profession) {
        // return 'My name is ' + this.name + ' my age is:' + this.age;
        return `My first name is ${this.fname} and last name is : ${this.lname} and my age is ${age} and i am a ${profession}`
    }
}

const person2 = {
    fname: "Sanjeev",
    lname: "Kr",
    age: 27,
    // fullData: function () {
    //     // return 'My name is ' + this.name + ' my age is:' + this.age;
    //     return `My first name is ${this.fname} and last name is : ${this.lname}`
    // }
}

const res = person1.fullData.call(person2, 27, "software engineer");

const res1 = person1.fullData.apply(person2, [27, "software engineer"]);

const res2 = person1.fullData.bind(person2, 27, "software engineer");

// console.log(res)
// console.log(res1)
console.log(res2())