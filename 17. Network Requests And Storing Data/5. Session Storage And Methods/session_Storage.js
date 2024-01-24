// console.log("session Storage in Javascript !!");

// const key = window.prompt("Enter the Key : ");
// const Value = window.prompt("Enter the Value : ");

// sessionStorage.setItem(key, Value);

// console.log(`Key : ${key} And The Value : ${Value}`);

// // removeItem --> it removes the particular item
// if(key == "red" || key == "color")
// {
//     sessionStorage.removeItem(key);
// }

// // clear() --> it clear the total localstorage
// if(key == 0)
// {
//     sessionStorage.clear();
// }


// Session Event
window.onstorage = (value) => {
    alert("Something Change Happened !!");
    console.log(value);
}

localStorage.setItem('Suraj', '1202011');

localStorage.setItem('Suraj', '12001');