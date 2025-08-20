"use strict";
// 7. Write a class User with private property name and getter/setter.
class User {
    constructor(name) {
        this.name = name;
    }
    get getName() {
        return this.name;
    }
    set setName(newName) {
        this.name = newName;
    }
}
const user = new User("Nguyễn Bùi Tấn Hiển");
console.log(user.getName);
user.setName = "Hiển Update";
console.log(user.getName);
