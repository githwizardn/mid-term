// მონაცემების შეყვანა
let num1 = prompt("შეიყვანეთ პირველი რიცხვი:");
let num2 = prompt("შეიყვანეთ მეორე რიცხვი:");
let operation = prompt("შეიყვანეთ ოპერაცია (+, -, *, /):");

//დადასტურება რიცხვი არის თუ არა
function isNumber(value) {
  return !isNaN(value);
}

// გამოთვლა
function calculate(number1, number2, operation) {
  switch (operation) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
      case "**":
      return number1 ** number2;

    case "%":
      return number1 % number2;
    case "*":
      return number1 * number2;
    case "/":
      if (number2 !== 0) {
        return number1 / number2;
      } else {
        return "შეცდომა : ნულზე გაყოფა";
      }
    default:
      return "მცდარი ოპერაცია";
  }
}

if (isNumber(num1) && isNumber(num2)) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);
  let result = calculate(num1, num2, operation);
  console.log(`რეზულტატი: ${result}`);
} else {
  console.log("მცდარი ოპერაცია: დარწმუნდით რომ შეგყავთ რიცხვები.");
}
