"use strict";
class Bird {
    constructor(name) {
        this.name = name;
    }
    fly() {
        return `${this.name} is flying!`;
    }
}
class Fish {
    constructor(name) {
        this.name = name;
    }
    swim() {
        return `${this.name} is swimming!`;
    }
}
const bird = new Bird("Sparrow");
const fish = new Fish("Goldfish");
console.log(bird.fly());
console.log(fish.swim());
