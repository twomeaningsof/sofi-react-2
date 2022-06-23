import { always } from "ramda";
import { getPromise } from "./getPromise";
import getRandomTeam from "./getRandomTeam";

const getRandomTeams = async (numberOfTeams) =>
  await getPromise(
    "getRandomTeams",
    always(Array.from({ length: numberOfTeams }).map(getRandomTeam)),
    "createRandomTeam"
  );

export default getRandomTeams;
