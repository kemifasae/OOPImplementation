import Employee from './Account';

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

