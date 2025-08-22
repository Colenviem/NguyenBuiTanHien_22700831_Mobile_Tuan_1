class AnimalBase {
  name: String;

  constructor(name: string) {
    this.name = name;
  }

  move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

class DogBase extends AnimalBase {
  bark(): void {
    console.log(`${this.name} says: Woof!`);
  }
}

class CatBase extends AnimalBase {
  meow(): void {
    console.log(`${this.name} says: Meow!`);
  }
}

const dogBase = new DogBase("Buddy");
const catBase = new CatBase("Whiskers");
dogBase.move(10);
dogBase.bark();

