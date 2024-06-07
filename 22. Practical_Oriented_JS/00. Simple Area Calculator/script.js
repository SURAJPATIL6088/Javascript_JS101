
let length;
let width;
let area;

document.getElementById("mySubmit").onclick = function(){
    length = Number(document.getElementById("myLength").value);
    width = Number(document.getElementById("myWidth").value);
    
    if(length <= 0){
        alert("Length must be greater than 0");
    }else if(width <= 0){
        alert("Width must be greater than 0");
    }

    if(length > 0 && width > 0){
        area = length * width;
    }else{
        area = undefined;
    }
    document.getElementById("show_cal").textContent = `Area : ${area} cm`
}


