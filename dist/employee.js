"use strict";
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    work() {
        console.log(`${this.name} is working...`);
    }
}
class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    manage() {
        console.log(`${this.name} is managing the ${this.department} department.`);
    }
}
class Developer extends Employee {
    constructor(name, salary, programmingLanguage) {
        super(name, salary);
        this.programmingLanguage = programmingLanguage;
    }
    code() {
        console.log(`${this.name} is coding in ${this.programmingLanguage}.`);
    }
}
const manager = new Manager("Alice", 80000, "Sales");
const developer = new Developer("Bob", 60000, "TypeScript");
manager.work();
manager.manage();
developer.work();
developer.code();
