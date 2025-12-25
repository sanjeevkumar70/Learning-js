const original={
    name:"Shrestha",
    skills: ["js","react"],
    meta:{city:"gurgram"},
    note: undefined,
};

const deepCopy = JSON.parse(JSON.stringify(original))

deepCopy.skills.push("core js");
deepCopy.meta.city="delhi";

deepCopy.name ="shrestha(deep copy)";

console.log("original:",original);
console.log("deep copy:",deepCopy);