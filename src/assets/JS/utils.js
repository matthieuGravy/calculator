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

export { detection, toDom };
