// 5. Create a class BankAccount with balance. Add methods deposit() and withdraw().
class BankAccount {
    private balance: number;

    constructor(initialBalance: number = 0){
        this.balance = initialBalance;
    }

    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited: ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Deposit amount must be positive!");
        }
    }

    withdraw(amount: number) {
        if (amount <= 0) {
            console.log("Withdraw amount must be positive!");
        } else if (amount > this.balance) {
            console.log("Insufficient funds!");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn: ${amount}. Remaining balance: ${this.balance}`);
        }
    }
}

const account  = new BankAccount(10000);
account.deposit(500);
account.withdraw(200);
account.withdraw(20000);