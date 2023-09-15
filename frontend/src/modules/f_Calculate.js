import { clearStorage } from "/frontend/src/modules/f_localStorage.js";
import { displayResult } from "/frontend/src/modules/f_displayResult.js";

export function load_f_Calculate() {
  console.log("f_Calculate.js wurde geladen");
}

export function calculate(numbers) {
  try {
    const operator = localStorage.getItem("calculatorOperator");

    if (operator != null) {
      const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b,
      };

      const operationFunction = operations[operator];

      if (operationFunction) {

        const number1 = parseFloat(numbers[0]);
        const number2 = parseFloat(numbers[1]);

        if (!isNaN(number1) && !isNaN(number2)) {
          const result = operationFunction(number1, number2);
        }
        // const result = numbers.reduce((acc,num) => operationFunction(acc,num));
        if (!isNaN(result)) {
          displayResult(result);
        } else {
          console.log("Das Ergebnis ist keine Zahl.");
        }
      }else{
        console.log("Der Operator ist nicht vorhanden.");
      } 
    } else {
      console.log("Der Operator ist nicht im localStorage vorhanden.");
    }
  } catch (error) {
    console.log("Fehler:", error);
  }
  clearStorage();

  console.log("calculate wurde aufgerufen");
}

