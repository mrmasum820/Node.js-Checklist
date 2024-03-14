class SuperHero {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

module.exports = SuperHero;

/**
 const SuperHero = require("./super-hero");

const batman = new SuperHero("Batman");
console.log(batman.getName());
batman.setName("Bruce Wayne");
console.log(batman.getName());

const superman = new SuperHero("Superman");
console.log(superman.getName());
superman.setName("John Doe");
console.log(superman.getName());
 */
