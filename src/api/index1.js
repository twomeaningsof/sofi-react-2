import { map } from "ramda";
import { getTotalScore } from "../utils/getTotalScore.js";
import { getTeamName } from "../utils/getTeamName.js";

const solve = (...data) =>
  map(
    (team) => ({ totalScore: getTotalScore(team), name: getTeamName(team) }),
    data
  );

export default solve; 

// console.log(solve(...first));
