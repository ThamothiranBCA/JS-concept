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

class Student extends Person {
    constructor(
        firstname,lastname,dob,phoneNo,isEmployed,school,grade){
        super(firstname,lastname,dob,phoneNo,isEmployed,school,grade);
        this.school = school;
        this.grade = grade;
    }
    getDetails(){
        const age = new Date().getFullYear() - this.dob;

        console.log(
            `${this.firstname} ${this.lastname} is ${age} years old, & studies in grade ${this.grade} at ${this.school} & contact no is${this.phoneNo}`
        );
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

let Student = new Student(
    'sai',
    'Pallavi',
    2000,
    1223334,
    true,
    'abc school',
    '10'
);

Student.getDetails();
