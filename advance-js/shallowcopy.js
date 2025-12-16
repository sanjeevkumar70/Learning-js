
//original copy
const obj1 = {
    name: "Sanjeev",
    address: { 
        city: "Delhi" ,
        pin:{
            loca1:837846,
            loca2:2387
        }
    }
};

//duplicate copy
const shallowCopy = { ...obj1 };
// const shallowCopy=Object.assign(obj1);

shallowCopy.address.city = "Mumbai";

console.log(obj1);
console.log(shallowCopy);
