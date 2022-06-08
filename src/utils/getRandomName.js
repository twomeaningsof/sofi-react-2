import { pipe, length, subtract, prop, __ } from "ramda";
import { getRandomNumber } from "./getRandomNumber.js";

export const getRandomName = (namesArray) =>
  pipe(
    length,
    subtract(__, 1),
    getRandomNumber(0, __),
    prop(__, namesArray)
  )(namesArray);
