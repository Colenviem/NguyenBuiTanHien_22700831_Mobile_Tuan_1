"use strict";
class Dog {
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "Woof!";
    }
}
class Cat {
    constructor(name) {
        this.name = name;
    }
    sound() {
        return "Meow!";
    }
}
const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
console.log(`${dog.name} says: ${dog.sound()}`);
console.log(`${cat.name} says: ${cat.sound()}`);
