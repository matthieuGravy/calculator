const termOne = document.getElementById("terme-1");
const termTwo = document.getElementById("terme-2");
const total = document.getElementById("result");
const areaOperator = document.getElementById("area-operator");
const correctorOne = document.getElementById("input-terme-1-correction");
const correctorTwo = document.getElementById("input-terme-2-correction");

// check la mutation de termeOne
function handleDOMMutation(mutationsList, observer) {}

const observer = new MutationObserver(handleDOMMutation);

const config = { childList: true, subtree: true };

observer.observe(termOne, config);

export { termOne, termTwo, areaOperator, total };
