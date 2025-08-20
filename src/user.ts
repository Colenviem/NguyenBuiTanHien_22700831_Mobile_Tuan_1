// 7. Write a class User with private property name and getter/setter.
class User {
    private name: String;

    constructor(name: String) {
        this.name = name;
    }

    get getName(): String {
        return this.name;
    }

    set setName(newName: String) {
        this.name = newName
    }
}

const user = new User("Nguyễn Bùi Tấn Hiển");

console.log(user.getName);

user.setName = "Hiển Update"; 

console.log(user.getName);