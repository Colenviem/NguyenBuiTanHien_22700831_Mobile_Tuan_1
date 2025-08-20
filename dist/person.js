"use strict";
// Create a class Person with attributes name and age. Write a method to display this information.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
const person = new Person("Nguyễn Bùi Tấn Hiển", 21);
person.display();
