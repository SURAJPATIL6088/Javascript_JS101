console.log("Array Methods -> 3(Array manipulation) in Javascript !!");

// declaring 
let arr = [1, 2, 3, 48, 5, 60];

// Classical for loop
// for(let i =0; i<arr.length; i++)
// {
//     console.log(arr[i]);
// }

// for each loop -> traditional for loop
arr.forEach((element) => {
    console.log(element * element);
})


// Array From
let name = "SURAJ";
let ar = Array.from(name);
console.log(ar);  // [ 'S', 'U', 'R', 'A', 'J' ]


// for..of loop
for(let i of arr)
{
    console.log(i);
}


// for..in loop
// it gives the index numbers
// to acess the value -> arr[i]
for(let i in arr)
{
    console.log(i);
}