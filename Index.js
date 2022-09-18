const express = require('express');
const PORT = 8000;
const app = express();

var takenloans = []

const loan1 = {
        id: 1,
        customerName: "Deshraj Jogiay",
        phoneNumber: 4808762863,
        address: "Junagadh",
        monthlyPayment: 100,
        interest: 4,
        loanTermYears: 10,
        loanType: "Student Loan",
        description: "Educational Loan",
        calculatedLoanAmount: function(){
            return this.monthlyPayment*((1+this.interest)**this.loanTermYears)*((((1+this.interest)**this.loanTermYears)-1)/this.interest)
        }

    }

const loan2 = {
        id: 2,
        customerName: "Ishan Joshi",
        phoneNumber: 4875652347,
        address: "Rajkot",
        monthlyPayment: 250,
        interest: 4,
        loanTermYears: 9,
        loanType: "Home Loan",
        description: "Loan for a farm house",
        calculatedLoanAmount: function(){
            return this.monthlyPayment*((1+this.interest)**this.loanTermYears)*((((1+this.interest)**this.loanTermYears)-1)/this.interest)
        }
    }

const loan3 = {
        id: 3,
        customerName: "Surya",
        phoneNumber: 8523697441,
        address: "Jamnagar",
        monthlyPayment: 700,
        interest: 4,
        loanTermYears: 12,
        loanType: "Car Loan",
        description: "Buy Ferari car",
        calculatedLoanAmount: function(){
            return this.monthlyPayment*((1+this.interest)**this.loanTermYears)*((((1+this.interest)**this.loanTermYears)-1)/this.interest)
        }
    }

const loan4 = {
        id: 4,
        customerName: "Sohaib vohra",
        phoneNumber: 1222887456,
        address: "Lasvegas",
        monthlyPayment: 130,
        interest: 4,
        loanTermYears: 2,
        loanType: "Commercial Loan",
        description: "Build new Pub",
        calculatedLoanAmount: function(){
            return this.monthlyPayment*((1+this.interest)**this.loanTermYears)*((((1+this.interest)**this.loanTermYears)-1)/this.interest)
        }
    }

const loan5 = {
        id: 5,
        customerName: "Rutvik",
        phoneNumber: 7788966585,
        address: "Texas",
        monthlyPayment: 200,
        interest: 8,
        loanTermYears: 3,
        loanType: "House Loan",
        description: "Buy new villa",
        calculatedLoanAmount: function(){
            return this.monthlyPayment*((1+this.interest)**this.loanTermYears)*((((1+this.interest)**this.loanTermYears)-1)/this.interest)
        }
    }              
// pushing the loans data in to the loans array.
takenloans.push(loan1)
takenloans.push(loan2)
takenloans.push(loan3)
takenloans.push(loan4)
takenloans.push(loan5)    

// getting final array
console.log(takenloans);

//individual laon amount
console.log(`first loan`+loan1.calculatedLoanAmount());
console.log(`Second loan`+loan2.calculatedLoanAmount());
console.log(`Third loan`+loan3.calculatedLoanAmount());
console.log(`Forth loan`+loan4.calculatedLoanAmount());
console.log(`Fifth loan`+loan5.calculatedLoanAmount());

// calculating total loan amount given and print it on console

let Totalgivanloan = takenloans.map(loanAmt => loanAmt.calculatedLoanAmount());

const total = Totalgivanloan.reduce((accumulator, value) => {
    return accumulator + value;
  }, 0)
  
   console.log(`The Total amount of Loan given is: ${total}`)

module.exports = (htmlStr, loan)=>{ //fat arrow function or lambda
    let Answer = htmlStr.replace(/{%SUM%}/g, loan.total);
    return Answer;
}

//
app.listen(PORT, function(){
    console.log(`The server is up and listening ${PORT}`);
})

app.get('/api/v1',function(req,res){
    res.status(200).send(`The Final Loan Amount is: ${total}`);

});