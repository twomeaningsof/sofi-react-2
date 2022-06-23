import { always } from "ramda";
import { getPromise } from "./getPromise";
import getRandomPlayer from "./getRandomPlayer";

const getRandomPlayers = async (numberOfPlayers) =>
  await getPromise(
    "getRandomPlayers",
    always(Array.from({ length: numberOfPlayers }).map(getRandomPlayer)),
    "createRandomPlayer"
  );
export default getRandomPlayers;
