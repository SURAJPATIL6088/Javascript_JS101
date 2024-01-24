//for taking the input importing the library
const prompt = require("prompt-sync")();

console.log("Conditionals in Javascript !!");

// there are three types 
// if statament
// if - else statament
// if - elseif - else statament
// switch statement

// write the program to check number is even or odd

let num = parseInt(prompt("Enter the Number : "));

if(num % 2 == 0)
{
    console.log(num,"is Even !!");
}
else
{
    console.log(num,"is Odd !!");
}

// switch statement

let n = parseInt(prompt("Enter the Number : "));

switch(n)
{
    case 1 : 
        console.log("You select One !!");
        break;

    case 2 : 
        console.log("You select Two !!");
        break;

    case 3 : 
        console.log("You select Three !!");
        break;
    
    default:
        console.log("Invalid Selection !!");
}