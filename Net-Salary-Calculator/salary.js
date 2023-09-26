//salary.js 
function calculateNetSalary(basicSalary, benefits) {
  const taxRate = 0.16;
  const nhifDeduction = 1555;
  const nssfDeduction = 0.03;  
  const grossSalary = basicSalary + benefits;// Calculates gross salary
  const tax = grossSalary * taxRate;// Calculates tax (PAYE)
  const netSalary = grossSalary - tax - nhifDeduction - (grossSalary * nssfDeduction);// Calculates net salary

  return {
    grossSalary,
    tax,
    nhifDeduction,
    nssfDeduction: grossSalary * nssfDeduction,
    netSalary,
  };
}
module.exports = calculateNetSalary;

