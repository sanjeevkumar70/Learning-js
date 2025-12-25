const numbers = [1,2,3,4,5,6];

const even = numbers.filter(num=> num%2==0);

console.log("original:", numbers);
console.log("filtered:",even);