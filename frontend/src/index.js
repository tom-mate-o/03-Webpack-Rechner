console.log("index.js wird geladen");

// import "/frontend/src/styles/style.css";

// Function Get Value 1 (f_getValue1.js)
//✅
import { load_f_getValue1 } from "/frontend/src/modules/f_getValue1.js";
load_f_getValue1();

import { getValue1 } from "/frontend/src/modules/f_getValue1.js";
getValue1();

// Function Get Value 2 (f_getValue2.js)
//✅
import { load_f_getValue2 } from "/frontend/src/modules/f_getValue2.js";
load_f_getValue2();

import { getValue2 } from "/frontend/src/modules/f_getValue2.js";
getValue2();

// Function localStorage (f_localStorage.js)
//✅
import { load_f_localStorage } from "/frontend/src/modules/f_localStorage.js";
load_f_localStorage();

import { appendToStorage } from "/frontend/src/modules/f_localStorage.js";
document.getElementById("add").addEventListener("click", function () {
  appendToStorage("+");
});

document.getElementById("subtract").addEventListener("click", function () {
  appendToStorage("-");
});

document.getElementById("multiply").addEventListener("click", function () {
  appendToStorage("*");
});

document.getElementById("divide").addEventListener("click", function () {
  appendToStorage("/");
});

// Function Calculate (f_Calculate.js)
//✅
import { load_f_Calculate } from "/frontend/src/modules/f_Calculate.js";
load_f_Calculate();

import { calculate } from "/frontend/src/modules/f_Calculate.js";

// Function Click Calculate Button (f_clickCalculate.js)
//✅
import { load_f_clickCalculate } from "/frontend/src/modules/f_clickCalculate.js";
load_f_clickCalculate();

document.getElementById("calculate").addEventListener("click", function () {
  console.log("INDEX Value 1:", getValue1());
  const value1 = getValue1();
  console.log("INDEX Value 2:", getValue2());
  const value2 = getValue2();

  const numbers = [value1, value2];
  calculate(numbers);
  let result = calculate(parseFloat(getValue1()), parseFloat(getValue2()));
});

// Function Display Result (f_displayResult.js)
//✅
import { load_f_displayResult } from "/frontend/src/modules/f_displayResult.js";
load_f_displayResult();
