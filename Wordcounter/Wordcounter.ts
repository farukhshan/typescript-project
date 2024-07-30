import inquirer from "inquirer";
const userinput : {
    sentence : string 
} = await inquirer.prompt(
    [{
        name : "sentence",
        type: "input",
        message:"type your sentence for word counting",
    }]
)

const word = userinput.sentence.trim().split("");
console.log(`your words count is ${word.length}`);
