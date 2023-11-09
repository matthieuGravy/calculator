import { termOne, termTwo, areaOperator, total } from "./screen";
import { toDom } from "./utils";

const calculator = () => {
  if (a.length > 0 && b.length > 0 && operatorUsed) {
    const numA = parseFloat(a.join(""));
    const numB = parseFloat(b.join(""));
    let result;
    switch (areaOperator.textContent) {
      case "+":
        result = numA + numB;
        break;
      case "-":
        result = numA - numB;
        break;
      case "*":
        result = numA * numB;
        break;
      case "/":
        result = numA / numB;
        break;
      default:
        result = "Invalid operator";
    }
    total.textContent = result;
  }
};

const operators = ["+", "-", "*", "/"];
const equalizer = ["=", "Enter"];
const point = ".";
const float = document.getElementById("point");
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

let a = [];
let b = [];
let operatorUsed = false;
let keyCounter = 0;
let floatClicked = false;

const handleNumberClick = (number) => {
  if (operatorUsed) {
    b.push(number);
    toDom(termTwo, b);
  } else {
    a.push(number);
    toDom(termOne, a);
  }
};

const handleFloat = () => {
  if (!floatClicked) {
    if (operatorUsed) {
      b.push(point);
      toDom(termTwo, b);
    } else {
      a.push(point);
      toDom(termeOne, a);
    }
    floatClicked = true;
  }
};

const handleEqualizer = () => {
  calculator();
  a.length = 0;
  b.length = 0;
  floatClicked = false;
  return (operatorUsed = false);
};

float.addEventListener("click", handleFloat);

/**
 * Adding click event listeners to number elements
 */
elements.forEach((element, index) => {
  element.addEventListener("click", () => {
    console.log(`click ${index}`);
    handleNumberClick(index);
    if (
      document
        .getElementById("equal")
        .addEventListener("click", handleEqualizer)
    );
  });
});

/**
 * Adding event listeners to operator buttons
 */
operators.forEach((operator) => {
  const buttonOperation = document.getElementById(`operator-${operator}`);
  if (buttonOperation) {
    buttonOperation.addEventListener("click", () => {
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
  if (key === point || key === ",") {
    handleFloat();
  }
  if (operators.includes(key)) {
    operatorUsed = true;
    areaOperator.textContent = key;
  }
  if (!isNaN(key) && key >= 0 && key <= 9) {
    handleNumberClick(parseFloat(key));
  }
  if (equalizer.includes(key)) {
    handleEqualizer();
  }
});
