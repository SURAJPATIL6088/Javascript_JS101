
let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Calling in 4 seconds !!")
        }, 4000)
    })
}

(async() => {
    let b = await a();
    console.log(b);

    let c = await a();
    console.log(c);

    let d = await a();
    console.log(d);
})()

