const  students =[
    {name:"shrestha",score:45},
    {name:"amit",score:45},
    {name:"neha",score:72}
];
 
const passed = students.filter(student=>student.score>=50);

console.log("original:",students);
console.log("passed",passed);