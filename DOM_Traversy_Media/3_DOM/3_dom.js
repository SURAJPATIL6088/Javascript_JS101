// navigating, traversing properties in JS

let output;

const Parent = document.querySelector('.parent');

output = Parent.children;
// by particular index
output = Parent.children[1]

// for getting the innerText
output = Parent.children[1].innerHTML;

// settning the containt in the child 2
output = Parent.children[1].innerText = 'Children Two';
// adding the styles to the child 2
output = Parent.children[1].style.color = 'red';
// adding background color
output = Parent.children[1].style.backgroundColor = 'aqua';

// to access the first & last child
output = parent.firstElementChild.innerHTML = 'first child';

console.log(output);


const Child = document.querySelector('.child');


