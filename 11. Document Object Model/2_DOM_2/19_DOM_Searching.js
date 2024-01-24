// lec 36 -> searching in the DOM

// getElementByClassName
// let ctitle = document.getElementById("card-title");
// ctitle.style.color = "red";

// 2 ) getElementById
// let ctitle = document.getElementById("firstBlock");
// ctitle.style.color = "red";

//console.log(document.getElementsByTagName("a"));

// lec 37 -> matches, closest and contains

// matches
let id1 = document.getElementById("firstblock");
console.log(id1);
console.log(id1.matches(".class"));


// closest
console.log(id1.closest(".class"));

console.log(id1.contains(id1));