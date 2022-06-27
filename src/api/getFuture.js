import { Future } from "fluture";
import { ifElse, gt } from "ramda";
import getRandomNumber from "./getRandomNumber.js";

const getFuture = (futureName, transformFn) =>
  Future((rej, res) => {
    const logic = ifElse(
      gt(0.8),
      () => res(transformFn()),
      () => rej(`${futureName} does not respond`)
    );

    const job = setTimeout(logic, getRandomNumber(1000, 3000), Math.random());

    return function cancel() {
      clearTimeout(job);
    };
  });

export default getFuture;
