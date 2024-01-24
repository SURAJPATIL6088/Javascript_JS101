//for taking the input importing the library
const prompt = require("prompt-sync")();

console.log("Inputs in Javascript !!");

// by default it is the string type

//how to int input
let a = parseInt(prompt("Enter the Num : "));
console.log(3+a);

// or

let b = prompt("Enter the Num : ");
b = Number.parseInt(b);
console.log(3+b);
