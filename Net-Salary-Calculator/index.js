//index.js 
const readline = require('readline'); const calculateNetSalary = require('./salary');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("Enter basic salary: ", (basicSalaryInput) => {
  rl.question("Enter benefits: ", (benefitsInput) => {
    const basicSalary = parseFloat(basicSalaryInput);
    const benefits = parseFloat(benefitsInput);

    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
      console.log("Invalid input. Please enter valid numbers for basic salary and benefits.");
    } else {
      const salaryDetails = calculateNetSalary(basicSalary, benefits);
      //Display the results
      console.log("Gross Salary:", salaryDetails.grossSalary);
      console.log("Tax (PAYE):", salaryDetails.tax);
      console.log("NHIF Deduction:", salaryDetails.nhifDeduction);
      console.log("NSSF Deduction:", salaryDetails.nssfDeduction);
      console.log("Net Salary:", salaryDetails.netSalary);
    }
    rl.close();
  });
});



