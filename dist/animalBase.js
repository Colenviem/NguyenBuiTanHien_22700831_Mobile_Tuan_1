"use strict";
class AnimalBase {
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}
class DogBase extends AnimalBase {
    bark() {
        console.log(`${this.name} says: Woof!`);
    }
}
class CatBase extends AnimalBase {
    meow() {
        console.log(`${this.name} says: Meow!`);
    }
}
const dogBase = new DogBase("Buddy");
const catBase = new CatBase("Whiskers");
dogBase.move(10);
dogBase.bark();
