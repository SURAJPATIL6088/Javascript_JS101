
// lec 47 -> introduction to events
/*
let a = document.getElementsByClassName(container)[0];
a.onclick = () => {
    let b = document.getElementsByClassName(container)[0];
    b.innerHTML = "Hello World !!";
}
*/

// lec 48 -> handling the events

// addEventListener

// passing function in event
//let fun = function(e)
//{
//    console.log(e.target);
//    alert("Handling Events in javaScript !!");
//}
//btn.addEventListener('click', fun);

/*
let x = function(event) {
    console.log(event.target)
    console.log(event.type, event.clientX, event.clientY)
    // alert("Hello World1!")
}

btn.addEventListener('onclick', x);

*/

// document.getElementsByClassName("Click me").addEventListener("click", function sm(){
//     console.log("Button clicked !!");
// })

// add event listener
const btnClick = document.querySelector('.btClick');

btnClick.addEventListener('click', () => 
    alert('Button Clicked !!'),
    console.log('Handling Events !!')
);





