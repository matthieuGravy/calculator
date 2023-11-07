const termOne = document.getElementById("terme-1");
const termTwo = document.getElementById("terme-2");
const areaOperator = document.getElementById("area-operator");
const correctorOne = document.getElementById("input-terme-1-correction");
const correctorTwo = document.getElementById("input-terme-2-correction");
const total = document.getElementById("result");

// check la mutation de termeOne
function handleDOMMutation(mutationsList, observer) {
  let termeoneValue = parseFloat(termOne.textContent);
  let termetwoValue = parseFloat(termTwo.textContent);
  let areaoperatorValue = parseFloat(areaOperator.textContent);
  console.log(termeoneValue);
  console.log(termetwoValue);
  console.log(areaoperatorValue);
}

const observer = new MutationObserver(handleDOMMutation);

const config = { childList: true, subtree: true };

observer.observe(termOne, config);

export { termOne, termTwo, areaOperator, total };
