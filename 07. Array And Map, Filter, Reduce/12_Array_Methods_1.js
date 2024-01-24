console.log("Array Methods -> 1 in Javascript !!");

// declaring 
let arr = [1, 2, 3, 48, 5, 60];

// print the array
console.log(arr);

// array converts into string
let str = arr.toString(arr);
console.log(str);

// join it will join the array
let c = arr.join("-");
console.log("Printing the Updated Array : ", c);

// pop
// it will delete the last element
arr.pop();
console.log("After Pop : ", arr);

// push
// it will insert into the start position
arr.push(100);
console.log("After Push : ", arr);
