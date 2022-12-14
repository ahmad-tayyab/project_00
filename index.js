#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Welcome user
// Take input from user
function welcomeMsg(msg) {
    console.log(chalk.bgRedBright(msg) + "\n");
}
welcomeMsg("WElcome Calculator");
// type Answer = {
//     firstNumber: number;
//     secondNumber: number;
//     operation: "+"|"-"|"x"|"/"|"^"|"%";
// }
async function getInput() {
    const answers = await inquirer.prompt([
        {
            name: "firstNumber",
            message: chalk.bgCyanBright("Enter First Digit"),
            type: "input",
        },
        {
            name: "secondNumber",
            message: chalk.bgBlueBright("Enter Second Digit"),
            type: "input",
        },
        {
            name: "operation",
            message: "Choose Operator My Lovley",
            type: "rawlist",
            choices: ["+", "-", "x", "/", "^", "%"],
        },
    ]);
    const firstNumber = Number(answers.firstNumber);
    const secondNumber = Number(answers.secondNumber);
    switch (answers.operation) {
        case "+":
            console.log(`Result:${firstNumber + secondNumber}`);
            break;
        case "-":
            console.log(`Result:${firstNumber - secondNumber}`);
            break;
        case "%":
            console.log(`Result:${firstNumber % secondNumber}`);
            break;
        case "/":
            console.log(`Result:${firstNumber / secondNumber}`);
            break;
        case "x":
            console.log(`Result:${firstNumber * secondNumber}`);
            break;
        case "^":
            console.log(`Result:${Math.pow(firstNumber, secondNumber)}`);
            break;
        default:
            break;
    }
    console.log("\n\n");
}
async function askAgain() {
    do {
        await getInput();
        var again = await inquirer.prompt({
            name: "confirmation",
            message: "Do you want another calculation? press y or n",
            type: "input",
        });
    } while (again.confirmation == "y" || again.confirmation == "yes" || again.confirmation == "Y" || again.confirmation == "YES");
}
askAgain();
