import { ifElse, concat, flip, curry, any, endsWith } from "ramda";

const exceptionArray = ["s", "z", "ch", "sh", "x"];

const flippedEndsWith = flip(endsWith);
const flippedConcat = flip(concat);

const endsWithException = curry((exceptions, value) =>
  any(flippedEndsWith(value))(exceptions)
);

const setPluralForm = ifElse(
  endsWithException(exceptionArray),
  flippedConcat("es"),
  flippedConcat("s")
);

export default setPluralForm;
