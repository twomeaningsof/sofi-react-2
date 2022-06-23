import { ifElse, gt } from "ramda";
import getRandomNumber from "./getRandomNumber.js";

export const getPromise = async (promiseName, transformFn) => {
  try {
    return [
      await new Promise((resolve, reject) => {
        setTimeout(async () => {
          ifElse(
            gt(0.8),
            async () => {
              const transformFnResults = await transformFn();
              resolve(transformFnResults);
            },
            () => reject(`${promiseName} does not respond`)
          )(Math.random());
        }, getRandomNumber(1000, 3000));
      }),
      null,
    ];
  } catch (error) {
    console.error(error);
    return [null, error];
  }
};
