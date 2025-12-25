const original={
    name:"shrestha",
    skills:["js","react"],
    meta:{city:"gurugram"}
};

const shallowCopy = {...original};
shallowCopy.skills.push("core js");
shallowCopy.meta.city="delhi";

shallowCopy.name="shrestha(copy)";
console.log("original:",original);
console.log("shallow copy:",shallowCopy);