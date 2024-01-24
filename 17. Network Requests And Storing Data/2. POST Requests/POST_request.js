// format of the POST request method
const createTodo = async (todo) => {
    let options = {
        method : "POST",
        headers : {
            "Content-type" : "application/json"
        },
        body: JSON.stringify(todo),
    }

    let promises = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = await promises.json();
    return response;
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    let r = await response.json();
    return r;
}

const mainFunc = async () => {
    // get our own todo list
    let todo = {
        title : 'Full Stack Blockchain Development',
        body : 'with Ethereum Blockchain',
        userId : 1202011,
    }

    // we are pushing in the dynamic array 
    // const arr = [];
    // arr.push(todo);

    // print your own todo
    let todor = await createTodo(todo);
    console.log(todor);

    // print the todo with id 10
    console.log(await getTodo(10));

    // console.log(arr);
}

// calling
mainFunc();



