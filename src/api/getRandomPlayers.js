import { always } from "ramda";
import getFuture from "./getFuture";
import getRandomPlayer from "./getRandomPlayer";

export const getRandomPlayers = (numberOfPlayers) =>
  getFuture(
    "getRandomPlayers",
    always(Array.from({ length: numberOfPlayers }).map(getRandomPlayer)),
    "createRandomPlayer"
  );

export default getRandomPlayers;
