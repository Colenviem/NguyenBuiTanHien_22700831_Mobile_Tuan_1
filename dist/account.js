"use strict";
class Account {
    constructor(owner, accountNumber, initialBalance) {
        this.owner = owner;
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}`);
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew: ${amount}`);
        }
        else {
            console.log("Insufficient funds!");
        }
    }
}
const myAccount = new Account("Alice", "123456789", 1000);
console.log(`Account Owner: ${myAccount.owner}`);
console.log(`Account Number: ${myAccount.accountNumber}`);
myAccount.deposit(500);
myAccount.withdraw(200);
