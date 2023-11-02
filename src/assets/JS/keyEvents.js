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
  term.textContent = a.join("");
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
let operatorUsed = false;

elements.forEach((element, index) => {
  element.addEventListener("click", () => {
    console.log(`click ${index}`);
    if (operatorUsed) {
      a = [];
      a.push(index);
      console.log(a);
      toDom(termTwo, a);
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
  }
});
