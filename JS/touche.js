function detection(a, event) {
  if (event.key === a) {
    console.log(a);
  }
}
const number = 0;
document.addEventListener("keydown", function (event) {
  detection(number.toString(), event);
});

const elements = [];

for (let i = 0; i <= 9; i++) {
  const element = document.getElementById(`number-${i}`);
  if (element) {
    elements.push(element);
  }
}

elements.forEach(function (element, index) {
  element.addEventListener("click", () => {
    console.log(`click ${index}`);
  });
});
