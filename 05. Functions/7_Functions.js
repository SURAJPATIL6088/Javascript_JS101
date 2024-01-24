//for taking the input importing the library
const prompt = require("prompt-sync")();
console.log("Functions in Javascript !!");

function sayHello()
{
    console.log("By using function ---> Functions in Javascript !!");
}

// calling the function object
sayHello();
// simple function that takes parameters
function Add(x, y)
{
    return x+y
}

let a = parseInt(prompt("Enter the Number : "));
let b = parseInt(prompt("Enter the Number : "));

console.log("Addition : ", Add(a, b));

// morden version of function/ arrow function
const Mul = (a, b) =>
{
    return a*b;
}

console.log("Multiplication : " + Mul(a, b));

// passing arrays in the function
// params
function aT(...arr)
{
    let total = 0;
    for(let i =0; i<arr.length; i++)
    {
        total += arr[i];
    }
    return total;
}
console.log(aT(1, 2, 3, 4, 5));



