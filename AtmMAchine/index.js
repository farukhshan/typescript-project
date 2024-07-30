import inquirer from "inquirer";
let myBalance = 100;
let myPin = 2020;
let typePin = await inquirer.prompt([
    { name: "pin",
        message: "Type Your Pin",
        type: "number",
    }
]);
if (typePin.pin === myPin) {
    console.log("your pin is correct");
}
else {
    console.log("your pins is incorrect");
}
;
