"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 2. Write a class Student extending Person with an additional attribute grade. Add a method to
// display all info.
const person_1 = require("./person");
class Student extends person_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
}
const student = new Student("Nguyễn Bùi Tấn Hiển", 21, 4.0);
student.display();
