'use strict';

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
    getSalary(){
        if (this.type === 'Salaried'){
            this.pay = "$3000";
        }
        return this;
    }
    getWage(hours){
        if(this.type==='Wages'){
            this.pay = hours*50
        }
        return this;
    }
    
}

export default Employee; 