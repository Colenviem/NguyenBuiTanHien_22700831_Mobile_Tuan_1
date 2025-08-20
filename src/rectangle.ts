// 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
class Rectangle {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return this.width * this.height;
    }

    calculatePerimeter(): number {
        return (this.width + this.height) * 2;
    }
}

const rectangle = new Rectangle(20, 35);

console.log(`Area: ${rectangle.calculateArea()}`);

console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);