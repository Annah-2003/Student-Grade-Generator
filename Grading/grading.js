//grading.js 
function calculateGrade(userMark) {
  if (userMark > 79) {
    return "A";
  } else if (userMark >= 60) {
    return "B";
  } else if (userMark >= 50) {
    return "C";
  } else if (userMark >= 40) {
    return "D";
  } else {
    return "E";
  }
}

export default calculateGrade;
