// async function example() {
//   return "Hello";
// }
// example().then(console.log); 


async function getData() {
    let result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let json = await result.json();
    console.log(json);
}


async function loadUsers() {
    try {
        const res = await fetch("https://jsonplaceholdersddsdsd.typicode.com/users");
        const data = await res.json();
        console.log(data);
    }
    catch (error) {
        console.log("Error:", error);
    }
}

loadUsers();