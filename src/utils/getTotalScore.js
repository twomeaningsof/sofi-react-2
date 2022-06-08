import { pipe, map, reduce, add, props } from "ramda";

export const getTotalScore = (team) =>
  pipe(map(props(["score"])), reduce(add, 0))(team);
