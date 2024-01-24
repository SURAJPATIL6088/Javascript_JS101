//for taking the input importing the library
const prompt = require("prompt-sync")();

console.log("Loops in Javascript !!");


console.log("For loops in Javascript !!");

/*
-> there are three types of for loop
    1) for
    2) for in
    3) for of
*/

// for loop
console.log("for loop !!");
for(let i = 0; i<6; i++)
{
    console.log("Hello",i);
}

// for in loop
// it is used for the special purpose
let Object = 
{
    suraj : 89,
    shubh : 84,
    bhushan : 99,
    aman : 90
}

console.log("for-in loop !!");
for(let a in Object)
{
    console.log("Marks of " + a + " are " + Object[a]);
}


// while loop

let number = parseInt(prompt("Enter the Number : "));

console.log("while loop !!");
let i = 0;
while(i < number)
{
    console.log("Num : ", number+i);
    i++;
}

console.log("do-while loop !!");

let number1 = parseInt(prompt("Enter the Number : "));

do
{
    console.log("Num : ", number+i);
    i++;    
}while(i < number1);

