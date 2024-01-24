//for taking the input importing the library
//const prompt = require("prompt-sync")();


console.log("Snake Water Gun Game !!");

const array = ['S', 'W', 'G'];
function randomSelection(array)
{
    // get the index of the random operation
    let randomIndex = Math.floor(Math.random() * array.length);

    // get the value of the random operation
    const item = array[randomIndex];

    return item;
}

// store the random value
let Random = randomSelection(array);
// document.write(Random);

// take input from the user
let User = prompt("Enter the following S/ G/ W : ");
// document.write(User);

let times = 0;
let WantToPlay = true;

while(WantToPlay)
{
    if(Random == 'W' && User == 'S')
    {
        document.write("User is Winner")
    }    
    else if(Random == 'W' && User == 'G')
    {
        document.write("Computer is Winner")
    }
    else if(Random == 'G' && User == 'W')
    {
        document.write("User is Winner")
    }    
    else if(Random == 'G' && User == 'S')
    {
        document.write("Computer is Winner")
    }  
    else if(Random == 'S' && User == 'G')
    {
        document.write("User is Winner")
    }
    else if(Random == 'S' && User == 'W')
    {
        document.write("Computer is Winner")
    }

    if(Random == User)
    {
        WantToPlay = true;
    }

    let Confiramation = confirm("Do you Want to Play !!")
    if(Confiramation)
    {
        WantToPlay = true;
        Random = randomSelection(array);
        User = prompt("Enter the following S/ G/ W : ");        
    }
    else
    {
        WantToPlay = false;
    }

    times++;
    if(times > 10)
    {
        break;
    }
}

let PlayTime = 10 - times;
document.write(PlayTime);









