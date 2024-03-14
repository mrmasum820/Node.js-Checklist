const fs = require("fs");

console.log("First");
// read file sync
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

console.log("Second");

// read file async
fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

console.log("Third");

// write file sync
fs.writeFileSync("./greet.txt", "Hello World!");

// write file async
fs.writeFile("./greet.txt", " Hello MR Masum", { flag: "a" }, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("file written successfully");
  }
});
