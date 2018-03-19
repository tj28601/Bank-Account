class BankAccount {
constructor (initial_balance) {
  this.initial_balance = initial_balance;
  this.transactions = [];
  this.currentBalance = initial_balance
};
addTransaction(amount) {
  amount.forEach((transaction) => {
  this.transactions.push(transaction);
});
return this.transactions;
}

getBalance(){
  let total = this.transactions.reduce(function(sum, transaction) {
    return sum + transaction;
  }, this.currentBalance);
  return total;
}
}


let myInitialBalance = 1000;
let bills = [-45, -99.95, -34.43]
let myBankAccount = new BankAccount(myInitialBalance);

console.log(myBankAccount.getBalance());
myBankAccount.addTransaction([-300, 500, -3]);
console.log(myBankAccount.getBalance());
myBankAccount.addTransaction([-300, 500, -3]);
console.log(myBankAccount.getBalance());
myBankAccount.addTransaction([-300, 500, -3]);
console.log(myBankAccount.getBalance());
