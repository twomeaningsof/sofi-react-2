import { pipe, split, addIndex, map, join } from "ramda";

const capitalize = pipe(
  split(""),
  addIndex(map)((letter, index) =>
    index ? letter.toLowerCase() : letter.toUpperCase()
  ),
  join("")
);

export default capitalize;
