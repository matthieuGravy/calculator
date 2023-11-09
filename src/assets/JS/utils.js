function toDom(term, a) {
  term.textContent = a.join("").replace(/,/g, "");
}

export { toDom };
