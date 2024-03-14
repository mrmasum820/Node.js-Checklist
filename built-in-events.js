const EventEmitter = require("events");

const emitter = new EventEmitter();

//register a listener
emitter.on("order-pizza", (size, topping) => {
  console.log(`order received! Baking a ${size} pizza with ${topping}`);
});

//register another listener
emitter.on("order-pizza", (size) => {
  if (size === "large") {
    console.log("serving complimentory drink");
  }
});

console.log("this code is works with non block event driven node.js evnets");

//emit an event
emitter.emit("order-pizza", "large", "mushrooms");
