class Employee
{
    login()
    {
        console.log("Employee has logged in !!");
    }

    logout()
    {
        console.log("Employee has logged out !!");
    }

    requestLeaves(leaves)
    {
        this.leaves = leaves;
        console.log(`Employee has requested ${this.leaves}days leaves !!`);
    }
}

class Manager extends Employee{
    requestCoffee(coffee)
    {
        this.coffee = coffee;
        console.log(`Manager has requested ${this.coffee} coffees !!`);
    }

    requestLeaves(leaves)
    {
        // super key-word
        super.requestLeaves(5); 
        // by using the super we can access the function inside the managers class
        // this.leaves = leaves;
        // console.log(`Employee has requested ${this.leaves + 1}days leaves (one extra) !!`);
    }
}

let macco = new Manager();
macco.login()
macco.requestLeaves(3)




