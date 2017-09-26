
class Employee{
    
    constructor(firstname,lastname, empcodeno, type){
        this.firstname=firstname;
        this.lastname=lastname;
        this.type = type;
        this.empcodeno=empcodeno;
    }

    getName(){
        return this.firstname + this.lastname;
    }

    getCode(){
        return this.empcodeno;
    }
    getType(){
        return type;
    }    
}

class Salaried extends Employee{
    constructor(firstname,lastname, empcodeno,type){
        super(firstname,lastname, empcodeno,'Salaried');
    }
    getSalary(){
        return "$3000"
    }
}

class Wages extends Employee{
    
    constructor(firstname,lastname, empcodeno,type,hours){
        super(firstname,lastname, empcodeno,'Wages');
        this.hours=hours;
    }

    getWages(){
        let val = hours*50
        return val;
    }
}
