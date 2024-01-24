function getCheeze() {
    return new Promise((resolve, reject) => { 
        setTimeout(() => { 
            const cheeze = "🧀"; 
            console.log("Get Your Extra Cheeze Here", cheeze); 
            resolve(cheeze);
            // reject("error occured !!");                     
        }, 3000);     
    }); 
} 

function makeDough(cheeze) {     
    return new Promise((resolve, reject) => {         
        setTimeout(() => {             
            const dough = cheeze + "🍩";             
            console.log("Get Dough Here", cheeze);             
            resolve(dough);                     
        }, 2000);     
    }); 
} 

function makePizza(dough) {     
    return new Promise((resolve, reject) => {         
        setTimeout(() => {             
            const pizza = dough + "🍕";             
            console.log("Get Your Pizza Here", dough);             
            resolve(pizza);                     
        }, 2000);     
    });  
}


async function orderPizza() {
    console.log("Wait for the Confirmation Status 3 Seconds...");
    
    const cheese = await getCheeze();
    console.log("Here is the Cheeze", cheese);

    const dough = await makeDough(cheese);
    console.log("Here is the Dough", dough);

    const pizza = await makePizza(dough);
    console.log("Here is your ready Pizza", pizza);

    console.log("Order is Completed!!");
}

// calling function
orderPizza();

