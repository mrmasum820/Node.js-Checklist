const obj1 = {
  name: "Bruce Wayne",
};

let obj2 = obj1;
obj2.name = "Clark Kent"; //reference by file location

// using object literal the property location isn't change
// obj2 = {
//   name: "Clark Kent",
// };

console.log(obj1);
