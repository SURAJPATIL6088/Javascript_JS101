
function getCheese() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const cheeze = "🍕";
            console.log("Get Your Extra Cheeze Here", cheeze);
            resolve(404);
            // reject("error occured !!");
        }, 3000);     
    });
}
// shows the promise state and result 
console.log(getCheese());
// calling
getCheese();

