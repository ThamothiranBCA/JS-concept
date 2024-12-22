let john = {
        firstname: 'John',
        lastname : 'wick',
        dob : 1992,
        phoneNo: 1010101010,
        isEmployed: true,

        getDetails: function (){
            const age = new Date().getFullYear() - this.dob;

            console.log(
                `${this.firstname} ${this.lastname} is ${age} old & contact no is ${this.phoneNo}`
            );
        },
        getEmployementStatus: function (){
            console.log(
                `${this.firstname} is ${this.isEmployed ? 'employed':'unemployed'}`
            );
        },
    };
    console.log(john);
    john.getDetails();
    john.getEmployementStatus()

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


    let  anni = new Person('MS', 'Dhoni', '1981', '1234567890','true');

    anni.getDetails();
    anni.getEmployementStatus();





