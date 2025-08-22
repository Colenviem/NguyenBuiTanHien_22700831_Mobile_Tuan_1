class Account {
    public owner: string;
    private balance: number;

    // Trường chỉ đọc: chỉ có thể được thiết lập một lần (trong hàm tạo)
    readonly accountNumber: string;

    constructor(owner: string, accountNumber: string, initialBalance: number) {
        this.owner = owner;
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: ${amount}`);
    }
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrew: ${amount}`);
    } else {
      console.log("Insufficient funds!");
    }
  }
}

const myAccount = new Account("Alice", "123456789", 1000);
console.log(`Account Owner: ${myAccount.owner}`);
console.log(`Account Number: ${myAccount.accountNumber}`);
myAccount.deposit(500);
myAccount.withdraw(200);