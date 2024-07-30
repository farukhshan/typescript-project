import inquirer from "inquirer";
let guess = Math.floor(Math.random() * 10 + 1 );
const Guessnumber = await inquirer.prompt(
    {
message:"Enter the number from 1 to 10 to guess the number",
type : "number",
name : "Rnumber" 
}
);
if (Guessnumber.Rnumber === guess){console.log("congratulation you guess the right number ..................")}
else (console.log ("!!! Flag !!!, You Guess the wrong number" ));