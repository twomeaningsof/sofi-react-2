import { chain, and, resolve } from "fluture";

const andTap = (f) => chain((x) => f |> and(resolve(x)));

export default andTap;
