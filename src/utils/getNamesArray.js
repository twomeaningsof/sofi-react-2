import { pipe, map, reduce, concat, props } from "ramda";

export const getNamesArray = pipe(
  map(map(props(["name"]))),
  reduce(concat, [])
);
