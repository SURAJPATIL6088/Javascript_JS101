/*

// lec 41 -> innerHTML, outerHTML & properties
console.log(document.getElementsByTagName("span")[0]);
// O/P : #text

console.log(document.body.firstChild.nodeName);
// O/P : SPAN

console.log(document.body.firstElementChild.nodeName);
// O/P : Hey this is span 

// inner HTML
// get the value
console.log(first.innerHTML);

// set the value
//first.innerHTML = <b>this is updated !!</b>
//console.log(first.innerHTML);


// outerHTML
console.log(first.outerHTML);
// O/P : <span id="first">Hey this is span </span>

// get all the text data inside in html
console.log(document.body.textContent);
/* O/P : 
Hey this is span 
    
Hey this is second span
*/


/*
// lec 42 -> attributes methods and data attributes

// getAttribute method
let a = first.getAttribute("class");
console.log(a);
// container

// hasattribute 
console.log(first.hasAttribute("class"));
// true

console.log(first.hasAttribute("style"));
// false

// set attributs
console.log(first.setAttribute("hidden", "true"));
// data of the id = first will be disappear

// data attributes
console.log(first0.dataset);
// game : "clash of clans"
// player: "suraj"

console.log(first0.dataset.game);
// clash of clans

console.log(first0.dataset.player);
// suraj

*/

/*
// lec 43 -> HTML insertion methods

let a = document.getElementsByTagName("div")[0];

let div = document.createElement('div');
div.innerHTML = '<h1>Hello World</h1>';
//a.appendChild(div);

// appear on the start
//a.prepend(div);

//a.before(div);

//a.after(div);

// a.replaceWith(div);
*/

/*
// lec 44 -> insertAdjacentHTML, insertAdjacentElement and insertAdjacentText

first.insertAdjacentHTML('beforebegin', '<div class ="test">beforebegin</div>');
first.insertAdjacentHTML('beforeend', '<div class ="test">beforeend</div>');
first.insertAdjacentHTML('afterbegin', '<div class ="test">afterbegin</div>');
first.insertAdjacentHTML('afterend', '<div class ="test">afterend</div>');

*/


// lec 45 -> className and classList


