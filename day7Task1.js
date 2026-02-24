// Store student marks
const marks = [78, 65, 82, 90, 56];

// Calculate total using reduce
const calculateTotal = (arr) =>
  arr.reduce((sum, mark) => sum + mark, 0);

// Calculate average
const calculateAverage = (arr) =>
  calculateTotal(arr) / arr.length;

// Pass / Fail based on average
const getResult = (avg) => (avg >= 40 ? "PASS" : "FAIL");

// Processing
const total = calculateTotal(marks);
const average = calculateAverage(marks);
const result = getResult(average);

// Display output
console.log(`
Student Marks Report
--------------------
Marks   : ${marks.join(", ")}
Total   : ${total}
Average : ${average.toFixed(2)}
Result  : ${result}
`);