import { pipe, always, curry } from "ramda";

const getRandomNumber = curry((min, max) =>
  pipe(always(Math.random() * (max - min + 1) + min), Math.floor)(min, max)
);

export default getRandomNumber;
