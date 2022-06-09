import { faker } from "@faker-js/faker";
import getRandomNumber from "../utils/getRandomNumber";
import setPluralForm from "./setPluralForm";
import capitalize from "./capitalize";

function getRandomTeam() {
  const name = `${capitalize(faker.word.adjective())} ${capitalize(
    setPluralForm(faker.animal.type())
  )}`;
  return {
    name,
    playersList: Array.from({ length: 6 }).map(() => faker.name.findName()),
    score: getRandomNumber(10, 360),
    description: `${name} team is located in ${faker.address.city()}.`,
  };
}

export default getRandomTeam;
