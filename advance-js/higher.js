// Higher-Order Function (HOF)


function processUser(name, callback) {
  console.log(callback(name));
}

processUser("Alice" , greet);

function greet(name) {
  return `Hello, ${name}`;
}
