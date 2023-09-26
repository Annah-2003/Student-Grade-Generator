//index.js
const readline = require('readline');
const calculateDemeritPoints = require('./speedDetector');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//calculateSpeed in  km/h
rl.question("Enter the car's speed (in km/h): ", (userInput) => {
  const speed = parseFloat(userInput);

  if (isNaN(speed) || speed < 0) {
    console.log("Invalid input. Please enter a valid speed.");
  } else {
    const result = calculateDemeritPoints(speed);
    console.log(result);
  }

  rl.close();
}); 