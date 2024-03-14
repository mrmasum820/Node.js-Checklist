function greet(name) {
  console.log(`Hello ${name}`);
}

// function greetMasum(greetFn) {
//   const name = "Masum";
//   greetFn(name);
// }

function higherOrderFunction(callback) {
  const name = "Masum";
  callback(name);
}

higherOrderFunction(greet);
