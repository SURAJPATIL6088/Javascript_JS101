
let count = 0;

document.getElementById("btnInc").onclick = function(){
    count++;
    document.getElementById("counter").textContent = count;
}

document.getElementById("btnRes").onclick = function(){
    count = 0;
    document.getElementById("counter").textContent = count;
}

document.getElementById("btnDec").onclick = function(){
    count--;
    document.getElementById("counter").textContent = count;
}

