import Employee from "./Account";

class Wages extends Employee{
    
    constructor(firstname,lastname, empcodeno){
        super(firstname,lastname, empcodeno,'Wages');
    }
    getWages(){
        return super.getWage(hours);
    }
}

export default Wages;