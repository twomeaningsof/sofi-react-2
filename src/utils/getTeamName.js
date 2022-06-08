import { pipe, map, reduce, slice, props } from "ramda";

const addTeamMate = (previousName, currentName) =>
  `${previousName} ${currentName}`;

export const getTeamName = (team) =>
  pipe(map(props(["name"])), reduce(addTeamMate, "Team"), slice(0, -1))(team);
