//for taking the input importing the library
const prompt = require("prompt-sync")();

console.log("Practice in Javascript !!");

// creating the object
const marks =
{
    suraj : 94,
    rohan : 67,
    bhushan: 99
}

// print the marks of these students
for(let i =0; i<Object.keys(marks).length; i++)
{
    console.log("The Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]]);
}

