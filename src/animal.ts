interface Animal {
    name: String;
    sound(): String;
}

class Dog implements Animal {
    name: String;

    constructor(name: String) {
        this.name = name;
    }

    sound(): String {
        return "Woof!";
    }
}

class Cat implements Animal {
    name: String;

    constructor(name: String) {
        this.name = name;
    }

    sound(): String {
        return "Meow!";
    }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
console.log(`${dog.name} says: ${dog.sound()}`);
console.log(`${cat.name} says: ${cat.sound()}`);