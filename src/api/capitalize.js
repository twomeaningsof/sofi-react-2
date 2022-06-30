import { over, lensIndex, toUpper, join, pipe } from "ramda";

const capitalize = pipe(over(lensIndex(0), toUpper), join(""));

export default capitalize;
