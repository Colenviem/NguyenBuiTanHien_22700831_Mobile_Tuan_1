interface Flyable {
    fly(): String;
}

interface Swimmable {
    swim(): String;
}

class Bird implements Flyable {
    name: String;

    constructor(name: String) {
        this.name = name;
    }

    fly(): String {
        return `${this.name} is flying!`;
    }
}

class Fish implements Swimmable {
    name: String;

    constructor(name: String) {
        this.name = name;
    }

    swim(): String {
        return `${this.name} is swimming!`;
    }
}

const bird = new Bird("Sparrow");
const fish = new Fish("Goldfish");
console.log(bird.fly());
console.log(fish.swim());