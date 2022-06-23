import { split, join, ifElse, always } from "ramda";
import mapIndexed from "../utils/mapIndexed";

const capitalize = (word) =>
  split("", word)
  |> mapIndexed((letter, index) =>
    ifElse(
      always(index),
      always(letter.toLowerCase()),
      always(letter.toUpperCase())
    )(letter, index)
  )
  |> join("");

export default capitalize;
