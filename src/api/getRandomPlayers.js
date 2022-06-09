import { getPromise } from "../utils/getPromise";
import getRandomPlayer from "../utils/getRandomPlayer";

const getRandomPlayers = async (numberOfPlayers) =>
  await getPromise(
    "getRandomPlayers",
    () => Array.from({ length: numberOfPlayers }).map(() => getRandomPlayer()),
    "createRandomPlayer"
  );
export default getRandomPlayers;
