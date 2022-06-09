function capitalize(word) {
  return word
    .split("")
    .map((letter, index) =>
      index ? letter.toLowerCase() : letter.toUpperCase()
    )
    .join("");
}

export default capitalize;
