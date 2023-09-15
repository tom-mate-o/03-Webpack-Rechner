export function load_f_getValue1() {
  console.log("f_getValue1.js wurde geladen");
}

export function getValue1() {
  let value1 = document.getElementById("input1").value;
  console.log("Value 1 = " + value1);
  return value1;
}
