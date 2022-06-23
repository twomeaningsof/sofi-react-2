import { pipe, curry, add, subtract, multiply, flip } from "ramda";

const getRandomNumber = curry((min, max) =>
  pipe(
    flip(subtract),
    add(1),
    multiply(Math.random()),
    add(min),
    Math.floor
  )(min, max)
);

export default getRandomNumber;
