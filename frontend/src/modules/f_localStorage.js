export function load_f_localStorage() {
  console.log("f_localStorage.js wurde geladen");
}

export function appendToStorage(value) {
  clearStorage();
  let currentData = localStorage.getItem("calculatorOperator") || "";
  currentData += value;
  localStorage.setItem("calculatorOperator", currentData);
  console.log("Operator = " + currentData);
}

export function clearStorage() {
  localStorage.removeItem("calculatorOperator");
}
