
console.log("Callback Hell function in JS");

function getCheese(callback) {
    setTimeout(() => {
        const cheeze = "🍕";
        console.log("Get Your Cheeze Here ", cheeze);
        callback(cheeze);
    }, 3000);
}

function makeDough(cheeze, callback) {
    setTimeout(() => {
        const dough = "🥮";
        console.log("Get Your Dough Here ", dough);
        callback(dough);
    }, 3000);
}

getCheese((cheeze) => {
    console.log("Got the Cheeze ", cheeze);
    makeDough(cheeze, (dough) => {
        console.log("Got the Dough ", dough);
    })
});


