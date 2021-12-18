// BANK ACCOUNT

const account = {
  accountName: "Bonnie",
  balance: 100,
  getBalance: function () {
    alert(`Your balance is ${this.balance} kronor`);
    atm (); 
  },
  deposit: function () {
    let depo = parseFloat(prompt
    ("Please put the amount you would like to deposit")
    );
    if (depo >= 1) {
      this.balance += depo;
      this.getBalance();
      atm();
    }
    else if (isNaN(depo) || depo <= 0) {
      this.accountError();
      this.deposit();
    }
  },
  withdrawl: function () {
    let withD = parseFloat(prompt("Please put the amount you would like to withdraw"));
    if (withD > this.balance) {
      alert(`Not enough funds. Your balance is ${this.balance}`);
      atm();
    }
    else if (isNaN(withD) || withD <= 0) {
      this.accountError();
      atm();
    }
    else {
      this.balance -= withD;
      this.getBalance();
    }
    atm();
  },
  getAccountName: function () {
    alert(`Account name: ${this.accountName}`);
    atm();
  },
  accountError: function () {
    alert("Unvalid input");
  },
  exitAccount: function () {
    alert("Welcome back!");
    window.close();
  },
};
// STARTER FUNCTION
function atm() {
  let choice = parseFloat(prompt("Select a choise 1.) See balance 2.)Make a deposit 3.)Make a withdrawl 4.) Get account name 5.) Exit"));
    switch (choice) {
      case 1:
        account.getBalance();
        break;
      case 2:
        account.deposit();
        break;
      case 3:
        account.withdrawl();
        break;
      case 4:
        account.getAccountName();
        break;
      case 5: 
        account.exitAccount();
        break;
      default:
        alert("Not a valid choise");     
    }
  }
  atm ();

  // I think we use parseFloat because we want the string the user inputs choise 1, 2, 3, 4, 5 to return as a number. 