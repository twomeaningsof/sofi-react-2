import { always } from "ramda";
import getFuture from "./getFuture";
import getRandomTeam from "./getRandomTeam";

const getRandomTeams = (numberOfTeams) =>
  getFuture(
    "getRandomTeams",
    always(Array.from({ length: numberOfTeams }).map(getRandomTeam)),
    "createRandomTeam"
  );

export default getRandomTeams;
