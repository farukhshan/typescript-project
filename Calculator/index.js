import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your firstnumber", type: "number", name: "firstnumber" },
    { message: "Enter your secondnumber", type: "number", name: "secondnumber" },
    {
        message: "Select the operation to perform",
        type: "list",
        name: "operation",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
if (answer.operation === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operation === "substration") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operation === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operation === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else
    (console.log("please select a valid operator"));
