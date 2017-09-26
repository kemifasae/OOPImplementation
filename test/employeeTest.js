const myapp = require('../Account.js'); 
//const myapp = require('../salaried.js');
//const should = require('chai').should;
//let assert = require('chai').assert;
const expect = require('chai').expect; 

describe("Salaried Employee", function(){
    it("should return $3000", function(){
        var emp = new Employee("bob", "tunde", "005", "Salaried");
        expect(Salemp.getCode()).toEqual('005');
    });

    it("should give return 200", function(){
        var Wageemp = new Wages("bob", "tunde", "005");
        expect(Salemp.getWage(4)).toEqual(200);
        });

    
});
