#!/usr/bin/env node

import inquirer from "inquirer";

const randomNumber = Math.floor (Math.random() * 10 + 1 );

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number 1-10:"
    },
]);

if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulation you guess a right number");
}else{
    console.log("you guess a wrong number");
}