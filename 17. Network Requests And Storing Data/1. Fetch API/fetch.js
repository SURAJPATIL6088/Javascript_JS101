
let promises = fetch("https://goweather.herokuapp.com/weather/Curitiba");

promises
    .then((response) =>{
        // it gives the value between 200-299
        console.log(response.status);

        // it gives the boolean value
        console.log(response.ok);
        
        // at the time 2 stages are available

        // it gives in the form of string
        // return response.text();    
        
        // it gives in the form of json
        return response.json();
    })
    .then((value) =>{
        console.log(value);
    });


