const termOne = document.getElementById("terme-1");
const termTwo = document.getElementById("terme-2");
const areaOperator = document.getElementById("area-operator");

function handleDOMMutation(mutationsList, observer) {
  const termeoneValue = termOne.textContent;
  const termetwoValue = termTwo.textContent;
  console.log(termeoneValue);
  console.log(termetwoValue);
}

const observer = new MutationObserver(handleDOMMutation);

const config = { childList: true, subtree: true };

observer.observe(termOne, config);

export { termOne, termTwo, areaOperator };
