import { first } from "../data.js";
import { getRandomNumber } from "./getRandomNumber.js";
import { getRandomName } from "./getRandomName.js";
import { getNamesArray } from "./getNamesArray.js";

export const getRandomPlayer = () => ({
  score: getRandomNumber(-2, 22),
  name: getRandomName(getNamesArray(first)),
});
