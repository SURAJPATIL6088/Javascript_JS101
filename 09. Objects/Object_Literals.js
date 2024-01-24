let x;
const Person =
{
    name: 'Suraj',
    age: 21,
    roll_no: 38,
    branch: 'comps',
    // nested object
    Address :
    {
        street: 'palghar',
        district: 'palghar',
        state: 'maharashtra',
        country: 'india'
    },
    // arrays inside the object
    hoppies : ['chess', 'dsa', 'blockchain', 'cp'],
}
// accessing the persons value
x = Person.name;
console.log(x);
x = Person.Address.state;
console.log(x);

