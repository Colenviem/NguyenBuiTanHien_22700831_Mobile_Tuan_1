// 3. Create a class Car with properties brand, model, year. Write a method to show car info.
class Car {
    brand: String;
    model: String;
    year: number;

    constructor( brand: String, model: String, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    showCarInfo(): String {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
    }
}

const car = new Car("Toyota", "Corolla", 2021);

console.log(car.showCarInfo())
