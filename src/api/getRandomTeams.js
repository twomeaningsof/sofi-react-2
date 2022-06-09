import { getPromise } from "../utils/getPromise";
import getRandomTeam from "../utils/getRandomTeam";

const getRandomTeams = async (numberOfTeams) =>
  await getPromise(
    "getRandomTeams",
    () => Array.from({ length: numberOfTeams }).map(() => getRandomTeam()),
    "createRandomTeam"
  );

export default getRandomTeams;
