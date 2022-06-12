import { ifElse, always } from "ramda";

const exceptionArray = ["s", "z", "ch", "sh", "x"];

const setPluralForm = (word) =>
  ifElse(
    always(exceptionArray.some((exception) => word.endsWith(exception))),
    always(word + "es"),
    always(word + "s")
  )(word);

export default setPluralForm;
