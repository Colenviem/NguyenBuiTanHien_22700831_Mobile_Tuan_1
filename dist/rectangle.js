"use strict";
// 4. Create a class Rectangle with width and height. Write a method to calculate area and perimeter.
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return (this.width + this.height) * 2;
    }
}
const rectangle = new Rectangle(20, 35);
console.log(`Area: ${rectangle.calculateArea()}`);
console.log(`Perimeter: ${rectangle.calculatePerimeter()}`);
