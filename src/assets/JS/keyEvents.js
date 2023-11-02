import { termOne, termTwo, areaOperator } from "./screen";

/**
 * Function to detect a specific key event
 * @param {string} a - The key to detect
 * @param {Event} event - The key event object
 */
function detection(a, event) {
  if (event.key === a) {
    console.log(a);
  }
}

function toDom(term, a) {
  term.textContent = a.join("").replace(/,/g, "");
}

/**
 * Storing elements representing numbers in an array
 * @type {HTMLElement[]}
 */
const elements = [];
for (let i = 0; i <= 9; i++) {
  const element = document.getElementById(`number-${i}`);
  if (element) {
    elements.push(element);
  }
}

/**
 * Adding click event listeners to number elements
 */
let a = [];
let b = [];
let operatorUsed = false;

elements.forEach((element, index) => {
  element.addEventListener("click", () => {
    console.log(`click ${index}`);
    if (operatorUsed) {
      b.push(index);
      console.log(b);
      toDom(termTwo, b);
    } else {
      a.push(index);
      console.log(a);
      toDom(termOne, a);
    }
  });
});

/**
 * Array containing arithmetic operators
 * @type {string[]}
 */
const operators = ["+", "-", "*", "/"];

/**
 * Adding event listeners to operator buttons
 */
operators.forEach((operator) => {
  const buttonOperation = document.getElementById(`operator-${operator}`);
  if (buttonOperation) {
    buttonOperation.addEventListener("click", () => {
      console.log(`button operation ${operator}`);
      operatorUsed = true;
      areaOperator.textContent = operator;
    });
  }
});

/**
 * Event listener for keydown events related to operators
 */
document.addEventListener("keydown", (event) => {
  const key = event.key;
  if (operators.includes(key)) {
    console.log(key);
    operatorUsed = true;
    areaOperator.textContent = key;
  }
  if (!isNaN(key) && key >= 0 && key <= 9) {
    if (operatorUsed) {
      b.push(parseInt(key));
      console.log(b);
      toDom(termTwo, b);
    } else {
      a.push(parseInt(key));
      console.log(a);
      toDom(termOne, a);
    }
  }
});
