const readline = require('readline');
const calculateGrade = require('./grading').default;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter the student's mark (between 0 and 100): ", (userInput) => {
  const userMark = parseFloat(userInput);

  if (isNaN(userMark) || userMark < 0 || userMark > 100) {
    console.log("Invalid input. Please enter a valid mark between 0 and 100.");
  } else {
    const grade = calculateGrade(userMark);
    console.log(`The student's grade is: ${grade}`);
  }

  rl.close();
});
