import Employee from "./Account";

class Salaried extends Employee{
    constructor(firstname,lastname, empcodeno){
        super(firstname,lastname, empcodeno,'Salaried');
    }
    getSalary(){
        return super.getSalary()
    }
}

export default Salaried;