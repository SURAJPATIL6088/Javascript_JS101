console.log("Local Storage in Javascript !!");

const key = window.prompt("Enter the Key : ");
const Value = window.prompt("Enter the Value : ");

localStorage.setItem(key, Value);

console.log(`Key : ${key} And The Value : ${Value}`);

// removeItem --> it removes the particular item
if(key == "red" || key == "color")
{
    localStorage.removeItem(key);
}

// clear() --> it clear the total localstorage
if(key == 0)
{
    localStorage.clear();
}

const Len_of_storage = localStorage.length();
console.log(Len_of_storage);

