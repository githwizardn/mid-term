// მონაცემების შეყვანა
let num1 = prompt("შეიყვანეთ პირველი რიცხვი:");
let operation = prompt("შეიყვანეთ ოპერაცია (+, -, *, /, **, %):");
let num2 = prompt("შეიყვანეთ მეორე რიცხვი:");

// დადასტურება რიცხვი არის თუ არა
if (!isNaN(num1) && !isNaN(num2)) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  // გამოთვლა
  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "შეცდომა: ნულზე გაყოფა";
      }
      break;
    case "**":
      result = num1 ** num2;
      break;
    case "%":
      result = num1 % num2;
      break;
    default:
      result = "მცდარი ოპერაცია";
  }
  console.log(`რეზულტატი: ${result}`);
  alert(`რეზულტატი: ${result}`);
} else {
  console.log("მცდარი ოპერაცია: დარწმუნდით რომ შეგყავთ რიცხვები.");
}
