import inquirer from "inquirer";
let myBalance = 100;
let myPin = 2020;

let typePin = await inquirer.prompt({
  name: "pin",
  message: "Type Your Pin",
  type: "number",
});

if (typePin.pin === myPin) {
  console.log("your pin is correct");
  let operationans = await inquirer.prompt([
    {
      name: "operation",
      message: "please select the bellow operation",
      type: "list",
      choices: ["Withdraw", "Fast Cash", "Check Balance"],
    },
  ]);
  if (operationans.operation=== "Check Balance"){console.log(myBalance)}
  else if (operationans.operation === "Withdraw") {
    let amountans = await inquirer.prompt([
      {
        name: "amount",
        message: "How much do you want to withdraw",
        type: "number",
      },
    ]);
    if (amountans.amount <= myBalance) {
      let balance = myBalance - amountans.amount;
      console.log(`your remaining balance is ${balance}`);
    } else {
      console.log("You have Insufficiant Balance");
    }
  } else if (operationans.operation === "Fast Cash") {
    let fastans = await inquirer.prompt([
      {
        name: "fastcashans",
        type: "list",
        message: "",
        choices: ["100", "200", "300", "400", "1000"],
      },
    ]);
    if (fastans.fastcashans <= myBalance) {
      let fbalance = myBalance - fastans.fastcashans;
      console.log(`the remaining balance is ${fbalance}`);
    } else {
      console.log("You have insufficiant Balance");
    } 
  }
else (console.log("your pin is incorrect"))}; 
