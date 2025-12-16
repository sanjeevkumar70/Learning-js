
//original copy
const obj1 = {
    name: "Sanjeev",
    address: {
        city: "Delhi",
        pin: {
            loca1: 837846,
            loca2: 2387
        }
    }
};

const obj3 = JSON.parse(JSON.stringify(obj1));
obj3.address.city = "Pune";

console.log(obj3.address.city);
console.log(obj1.address.city); 
