function detection(a, event) {
  if (event.key === a) {
    console.log(a);
  }
}
for (let i = 0; i <= 9; i++) {
  document.addEventListener("keydown", function (event) {
    detection(i.toString(), event);
  });
}

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
