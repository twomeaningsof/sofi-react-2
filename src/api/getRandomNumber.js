import { curry, add, subtract, multiply, flip } from "ramda";

const getRandomNumber = curry(
  (min, max) =>
    subtract(max, min)
    |> add(1)
    |> multiply(Math.random())
    |> add(min)
    |> Math.floor
);

export default getRandomNumber;
