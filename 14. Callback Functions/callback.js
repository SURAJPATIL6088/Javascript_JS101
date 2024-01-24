const calculate = (a, b, operation) => {
    return operation(a, b);
}

/// method 1
// callback operation by using simple function
const addition = calculate(5, 4, function(num1, num2){
    return num1 + num2;
});

console.log(addition);

/// method 2
// callback operation by using arrow function
const subtraction = (a, b) => a - b;
const subResult = calculate(10, 4, subtraction);

console.log(subResult);

/// method 3
// by passing the simple function
function multiply(a, b) {
    return a * b;
}

const mulResult = calculate(5, 4, multiply);
console.log(mulResult);
