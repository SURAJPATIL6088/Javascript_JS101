function getCheeze() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const cheeze = "🧀";
            console.log("Here is Extra Your cheeze", cheeze);
            resolve(cheeze);
        }, 2000);
    })
}

function getCocaCola() {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            const CocaCola = "🥂";
            console.log("Here is Your CocaCola", CocaCola);
            resolve(CocaCola)
        }, 2000);
    })
}

// 1)
// promises api methods
// let promise_all = Promise.all([getCheeze, getCocaCola]);
// print the values
// promise_all.then((value) =>{
//     console.log(value);
// })

// 2)
// let promise_allSettled = Promise.allSettled([getCheeze, getCocaCola]);

// // print the values
// promise_allSettled.then((value) =>{
//     console.log(value);
// })

// 3)
// let promise_race = Promise.race([getCheeze, getCocaCola]);

// // print the values
// promise_race.then((value) =>{
//     console.log(value);
// })

//4)
// let promise_any = Promise.any([getCheeze, getCocaCola]);

// // print the values
// promise_any.then((value) =>{
//     console.log(value);
// })

// 5)
// let promise_resolve = Promise.resolve([getCheeze, getCocaCola]);

// // print the values
// promise_resolve.then((value) =>{
//     console.log(value);
// })

// // 6)
// let promise_reject = Promise.reject([getCheeze, getCocaCola]);

// // print the values
// promise_reject.then((value) =>{
//     console.log(value);
// })



