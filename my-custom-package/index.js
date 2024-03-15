const upperCase = require("upper-case").upperCase;

function greet(name) {
  console.log(upperCase(`Hello ${name}, welcome to Node.js`));
}

greet("MR Masum");

module.exports = greet;
