export function load_f_displayResult() {
  console.log("f_displayResult.js wurde geladen");
}

export function displayResult(result) {
  document.getElementById("result").textContent = "Ergebnis = " + result;
}
