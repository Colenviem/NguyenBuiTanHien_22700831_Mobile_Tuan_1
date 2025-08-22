"use strict";
class Shape {
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle1 extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
const circle = new Circle(5);
const rectangle1 = new Rectangle1(4, 6);
console.log(`Circle area: ${circle.area()}`);
console.log(`Rectangle area: ${rectangle1.area()}`);
