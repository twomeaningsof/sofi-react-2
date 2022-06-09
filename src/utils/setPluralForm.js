const exceptionArray = ["s", "z", "ch", "sh", "x"];

const setPluralForm = (word) => {
  exceptionArray.forEach((exception) => {
    word.endsWith(exception) ? (word += "es") : "";
  });
  return word.endsWith("es") ? word : word + "s";
};

export default setPluralForm;
