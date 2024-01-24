console.log("Strings in Javascript !!");

// declaration 
let str = "Suraj";
let str1 = "Bhushan";

// printing the string letter by letter
for(let i = 0; i<str.length; i++)
{
    console.log(str[i]);
}

// Morden JavaScript

// 1 ) interpolation
let s = "Suraj!";
let b = "Bhushan.";

let Sentence = `is ${s} is brother of ${b}`;
console.log(Sentence);


// 2 ) Escape Sequence Chaharacter
// single quote
let f = 'Banana\'s';
console.log(f);

// double quote
let ff = "Banana\"s";
console.log(ff);

// double back-slash
let fff = 'Banana\s';
console.log(fff);

