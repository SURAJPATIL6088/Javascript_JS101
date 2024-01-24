//for taking the input importing the library
const prompt = require("prompt-sync")();

console.log("Guess the Number in Javascript !!");

let chances = 1;
let userInput = 0;

let number = Math.floor((Math.random() * 100)+1);

userInput = prompt("Enter the Number : ");

while(number != userInput)
{
    if(userInput > number)
    {
        console.log("Input is Greater Try Again !!");
        chances++;   
    }
    else if(userInput < number)
    {
        console.log("Input is Lesser Try Again !!");
        chances++;  
    }

    userInput = prompt("Enter the Number : ");
}

console.log("Yay ! Number is Matched !!!");
let score = 100 - chances;
console.log("Your Score is", score);