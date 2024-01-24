const student = {
    name : "John",
    rollNo : 38,
    Branch : "COMPUTER"
};

console.log(student);   

//
// console.log(student.name);
// console.log(student.Branch);

// another object 
const school = {
    No_of_Student : 2358,
    Principal : "PROF. TUNTUN"
}


// in this we are making the prototype of the student object with the school object
school.__proto__ = student;
// it defines
// school --> parent class
// student --> child class of the school

console.log(school.Principal);


// here we can see the school does'nt have any property name
// firstly it's searched in itself if can't found then check her prototype chain 
// if get then return if not then return undefined
console.log(school.name);
console.log(school.rollNo);
console.log(school.__proto__);
