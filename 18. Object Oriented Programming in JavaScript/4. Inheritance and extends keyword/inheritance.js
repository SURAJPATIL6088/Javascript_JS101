// class creation
class University
{
    constructor(name, rollNo, branch)
    {
        this.name = name;
        this.rollNo = rollNo;
        this.branch = branch;
    }

    AddNewCollege()
    {
        console.log(`${this.name} these new College Added whose Id No is ${this.rollNo} for these ${this.branch} Branch`);
    }      

    fixExamDate()
    {
        console.log(`For the ${this.branch} Branch End Semister Exam Starts From 24th April 2023 to 10th May 2023`);
    }

}

class College extends University
{
    AddNewStudent(stuname)
    {
        this.stuname = stuname;
        console.log(`${this.stuname} student Added whose Roll No is ${this.rollNo} in the Branch ${this.branch}`);
    }    

    greetings()
    {
        console.log(`All the Best ${this.branch} Branch Students!!`);
    }
}

// by using the extends keyword 
// the university can access all the methods of the college

// parent class instance object
const MU = new University("Mumbai University", 1234, "COMPUTER");
const SPPU = new University("Pune University", 8672, "COMPUTER");

MU.fixExamDate();
MU.AddNewCollege();

// SPPU.fixExamDate();
// SPPU.AddNewCollege();


// child class instance object

const SJCEM = new College("SJCEM", 1234, "COMPUTER");

SJCEM.AddNewStudent("jackson");
SJCEM.greetings();
SJCEM.fixExamDate();


