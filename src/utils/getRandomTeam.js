import { faker } from "@faker-js/faker";
import getRandomNumber from "../utils/getRandomNumber";
import setPluralForm from "./setPluralForm";
import capitalize from "./capitalize";

function getRandomTeam() {
  const nameAdj = capitalize(faker.word.adjective());
  const nameAnimal = capitalize(setPluralForm(faker.animal.type()));
  const name = `${nameAdj} ${nameAnimal}`;
  const playersList = Array.from({ length: 6 }).map(() =>
    faker.name.findName()
  );
  const score = getRandomNumber(10, 360);

  return {
    name,
    playersList,
    score,
    description: `${name} team is located in ${faker.address.city()}.`,
  };
}

export default getRandomTeam;
