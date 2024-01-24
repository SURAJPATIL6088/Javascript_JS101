console.log("Map, Filter And Reduce in Javascript !!");

// declaring 
let arr = [1, 2, 3, 48, 5, 60];

// array of map method

// map creates the new array of that we are passing
// and also we have to return 
let a = arr.map((value, index) => {
    // console.log(value, index);
    return value + 1;
})

// let the new array a will be created
// console.log(a);


// array of filter method

let newArr = [1, 4, 6, 32, 56, 77];

// we have to store those value which are less than 10
const nArr = newArr.filter((val) =>
{
    return val < 10;
});

// console.log(nArr, newArr);


// array reduce method

let A1 = [2, 5, 6, 3, 4];
console.log(A1);

const A2 = A1.reduce((h1, h2) =>
{
    // console.log(h1 + h2);  // for printing how it works
    return h1 + h2;
});

/*
it will take first 2 and 5 = 7,
then it take 6 + 7(previous sum) = 13,
then it take 3 + 13(previous sum) = 16,
then it take 4 + 16(previous sum) = 20,

finally reduced value : 20
*/

console.log("Reduced Value :", A2);