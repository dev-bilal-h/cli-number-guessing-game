#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green("       WELCOME TO B23 NUMBER GUESSING GAME       "));
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.magentaBright("Please guess a number between 1-10:"),
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log(chalk.blueBright("Congratulation! you gussed right number"));
}
else {
    console.log(chalk.red("you guessed wrong number"));
}
