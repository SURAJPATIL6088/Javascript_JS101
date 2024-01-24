console.log("Primitives And Objects in Javascript !!");


// primitives
// there are 7 primitive data types
let a = 23;
let b = null;
let c = true;
let d = BigInt("454") + BigInt("46");
let e = "Suraj";
let f = Symbol("hi i am suraj !!");
let g = undefined;

console.log(a, b, c, d, e, f, g);


// objects

// key - value pairs
// it is non-primitives data types
// we can create the object like mapping, dictionaries
                                                                            
const ClassTE = 
{
    "Suraj":true,
    "Bhushan":false,
    "Varad":65,
    "Aman":undefined
}

// access particular entry
console.log(ClassTE["Bhushan"]);

// accessing the full object
console.log(ClassTE);
