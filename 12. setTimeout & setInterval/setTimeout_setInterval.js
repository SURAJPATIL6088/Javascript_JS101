
alert("setTimeout & setInterval");

/* setTimeout & clearTimeout for functions

let bool = setTimeout(function(){
    alert("Hey we inside the setTimeout Function !! ");
}, 2000);

let decide = prompt("Enter the Y or N : ");

if(decide == 'Y')
{
    document.write("Test-Case Passed !!");
    clearTimeout(bool);
}
else
{
    document.write("Test-Case Failled !!");
    clearTimeout(bool);
}

*/

// setTimeout
// let TimerId = setTimeout(function, <delay>, <arg1>, <arg2>);

const sum = (a, b, c) =>
{
    document.write("the Sum of these element : ", (a+b+c));
}

let TimerId = setTimeout(sum, 2000, 1, 3, 6);
document.write(TimerId);