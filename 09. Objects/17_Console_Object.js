// console object method in javascript

// it gives the types of console object
console.log(console);

/*
Object [console] 
{
    log: [Function: log],        
    warn: [Function: warn],      
    dir: [Function: dir],        
    time: [Function: time],      
    timeEnd: [Function: timeEnd],
    timeLog: [Function: timeLog],
    trace: [Function: trace],    
    assert: [Function: assert],  
    clear: [Function: clear],    
    count: [Function: count],    
    countReset: [Function: countReset],
    group: [Function: group],
    groupEnd: [Function: groupEnd],
    table: [Function: table],
    debug: [Function: debug],
    info: [Function: info],
    dirxml: [Function: dirxml],
    error: [Function: error],
    groupCollapsed: [Function: groupCollapsed],
    Console: [Function: Console],
    profile: [Function: profile],
    profileEnd: [Function: profileEnd],
    timeStamp: [Function: timeStamp],
    context: [Function: context],
    createTask: [Function: createTask]
}
*/

// Assert function
// it check if true OR false
//console.assert(5<5);    // Assertion failed
console.assert(5 == 5);    // only run that means Assertion is true


// clear
// it clear the console
//console.clear();


// table
// if we have the object it convert into the table

const item = 
{
    a : 3,
    b : 4,
    c : 1,
    d : 2
};
console.table(item);

/*  
             ┌─────────┬────────┐
    O/P :    │ (index) │ Values │
             ├─────────┼────────┤
             │    a    │   3    │
             │    b    │   4    │
             │    c    │   1    │
             │    d    │   2    │
             └─────────┴────────┘
*/


// warn
// it use to display the warnings
console.warn("hey! don't use that..");


// info
// same as warn but store in the info
console.info("It's important file !!");


// error
console.error("used for error !!");
