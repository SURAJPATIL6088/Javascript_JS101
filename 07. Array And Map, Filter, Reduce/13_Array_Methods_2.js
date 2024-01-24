console.log("Array Methods -> 2 in Javascript !!");

// declaring 
let arr = [1, 2, 3, 48, 5, 60];

// lenght of the array and delete function
//console.log(arr.length);  // 6
// delete arr[0];
//console.log(arr.length);  // 6


// concat function
console.log("Concat Function : ")
let arr2 = [2, 4, 6, 8];
let newArr = arr.concat(arr2);
console.log(newArr);

console.log();

// sort method
// it will sort in the alphabetical order
console.log("Sort Function : ")
newArr.sort();
console.log(newArr);

// reverse the array
console.log("Reverse Function : ")
newArr.reverse();
console.log(newArr);

// splice and slice function
console.log("Splice Function : ")

let s = [1, 2, 3, 4, 5, 6, 7];
s.splice(2, 3, 1023, 1024, 1025);

// splice take the following arguments (start, no_of_values, values....)


// slice function
s.slice(1, 3);
console.log(s);
