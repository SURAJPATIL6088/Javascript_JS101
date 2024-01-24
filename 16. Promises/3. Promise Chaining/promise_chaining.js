
// using the simple function
// function getCheese() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const cheeze = "🧀";
//             console.log("Get Your Extra Cheeze Here", cheeze);
//             resolve(cheeze);
//             // reject("error occured !!");            
//         }, 3000);
//     });
// }

// using the arrow function 
const getCheese = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheeze = "🧀";
            console.log("Get Your Extra Cheeze Here", cheeze);
            resolve(cheeze);
            // reject("error occured !!");            
        }, 3000);
    });
}

// using the simple function
// function makeDough(cheeze) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dough = cheeze + "🍩";
//             console.log("Get Dough Here", cheeze);
//             resolve(dough);            
//         }, 2000);
//     });
// }

// using the arrow function 
const makeDough = (cheeze) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheeze + "🍩";
            console.log("Get Dough Here", cheeze);
            resolve(dough);
        }, 2000);
    });
}

// using the simple function
// function makePizza(dough) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const pizza = dough + "🍕";
//             console.log("Get Your Pizza Here", cheeze);
//             resolve(pizza);            
//         }, 2000);
//     }); 

// }

// using the arrow function 
const makePizza = (dough) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough + "🍕";
            console.log("Get Your Pizza Here", cheeze);
            resolve(pizza);
        }, 2000);
    });

}

getCheese()
    .then((cheeze) => {
        console.log("Here is the Cheeze", cheeze);
        return makeDough(cheeze);
    })
    .then((dough) => {
        console.log("Here is the Dough", dough);
        return makeDough(dough);
    })
    .then((pizza) => {
        console.log("Here is your ready Pizza", pizza);    })
    .catch((pizza) =>{
        console.log("sorry!!");
    });




