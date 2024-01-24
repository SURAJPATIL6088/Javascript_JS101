
const ticket = new Promise((resolve, reject) => {
    const isBoard = flase;

    if (isBoard) {
        resolve("Yes, get the Flight...");
    }
    else {
        reject("Oh No!, i missed the flight...");
    }
});

// by using the 
// calling the then and catch method
ticket
    .then(function(data) {
        console.log("Yes, get the Flight...");
    })
    .catch(function(data){
        console.log("Oh No!, i missed the flight...");
    });

// by using the arrow function syntax
// calling the then and catch method
ticket
    .then((data) => {
        console.log("Yes, get the Flight...");
    })
    .catch((data) => {
        console.log("Oh No!, i missed the flight...");
    });




