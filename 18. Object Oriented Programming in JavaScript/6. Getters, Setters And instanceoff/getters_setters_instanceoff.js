class Company
{
    constructor(name)
    {
        this._name = name;
    }

    Services()
    {
        console.log("It provides the Many services !!");
    }

    // getter
    get name()
    {
        return this._name;
    }
}

let c = new Company("Apple")
c.Services();

console.log(c.name);

console.log(c instanceof Company);