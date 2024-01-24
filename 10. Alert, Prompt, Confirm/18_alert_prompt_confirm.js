// alert, prompt, confirm function in js

alert("Enter the Number : ");
let a = parseInt(prompt("Enter the Number here : "));


let write = confirm("Do you want to write it to the Page ");

if(write)
{
    document.write(a);
}
else
{
    alert("Please Allow me to write Something !!");
}