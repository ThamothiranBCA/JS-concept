class Person{
    constructor(firstname,lastname,dob,phoneNo,isEmployed,)
    {
    this.firstname = firstname;
    this.lastname = lastname;
    this.dob = dob;
    this.phoneNo = phoneNo;
    this.isEmployed = isEmployed;
    }
    getDetails(){
        const age = new Date().getFullYear() - this.dob;

        console.log(
            `${this.firstname} ${this.lastname} is ${age} old & contact no is ${this.phoneNo}`
        );
    }
    getEmployementStatus(){
        console.log(
            `${this.firstname} is ${this.isEmployed ? 'employed':'unemployed'}`
        );
    }
}

class Employee extends Person {
    constructor(
        firstname,
        lastname,
        dob,
        phoneNo,
        isEmployed,
        jobTitle,
        company
    ){
        super(firstname,lastname,dob,phoneNo,isEmployed);
        this.jobTitle = jobTitle;
        this.company = company;
    }
}

let Employee1 = new Employee(
    'Arun',
    'kumar',
    1999,
    9876543321,
    true,
    'Frontend developer',
    'JSP LIMITED',
);

Employee1.getDetails();
Employee1.getEmployementStatus();
console.log(Employee1.company);