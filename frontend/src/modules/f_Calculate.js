import { clearStorage } from "/frontend/src/modules/f_localStorage.js";
import { displayResult } from "/frontend/src/modules/f_displayResult.js";

export function load_f_Calculate() {
  console.log("f_Calculate.js wurde geladen");
}

export function calculate(number1, number2) {
  try {
    let operator = localStorage.getItem("calculatorOperator");

    // Überprüfen ob operator nicht null oder undefined ist
    if (operator != null) {
      let result;

      switch (operator) {
        case "+":
          result = number1 + number2;
          break;

        case "-":
          result = number1 - number2;
          break;

        case "*":
          result = number1 * number2;
          break;

        case "/":
          result = number1 / number2;
          break;

        default:
          break;
      }

      displayResult(result);
    } else {
      console.log("Der Operator ist nicht im localStorage vorhanden.");
    }
  } catch (error) {
    console.log("Fehler:", error);
  }
  clearStorage();

  console.log("calculate wurde aufgerufen");
}
