import { ifElse, always, gt } from "ramda";
import { getRandomNumber } from "./getRandomNumber.js";

export const getPromise = async (promiseName, transformFn, relatedPromise) => {
  try {
    return await new Promise((resolve, reject) => {
      setTimeout(async () => {
        ifElse(
          gt(0.999),
          async () => {
            const transformFnResults = await transformFn();
            ifElse(
              always(relatedPromise && transformFnResults.includes(undefined)),
              () =>
                reject(`${relatedPromise} did not respond - process aborted`),
              () => resolve(transformFnResults)
            )();
          },
          () => reject(`${promiseName} does not respond`)
        )(Math.random());
      }, getRandomNumber(1000, 2000));
    });
  } catch (error) {
    console.error(error);
  }
};
