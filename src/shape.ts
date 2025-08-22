abstract class Shape {
    abstract area(): number;
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    area(): number {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle1 extends Shape {
    width: number;
    height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }
}

const circle = new Circle(5);
const rectangle1 = new Rectangle1(4, 6);
console.log(`Circle area: ${circle.area()}`);
console.log(`Rectangle area: ${rectangle1.area()}`);