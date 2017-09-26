const myapp = require('../Account.js','../wages.js', '../salaried.js' );
//const should = require('chai').should;
//let assert = require('chai').assert;
const expect = require('chai').expect; 

describe("Salaried Employee", function(){
    it("should return $3000", function(){
        var Salemp = new Salaried("bob", "tunde", "005");
        expect(Salemp.getSalary()).toEqual('$3000');
    });

    it("should give return 200", function(){
        var Wageemp = new Wages("bob", "tunde", "005");
        expect(Salemp.getWage(4)).toEqual(200);
        });

    
});
