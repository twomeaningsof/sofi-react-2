import { faker } from "@faker-js/faker";
import { concat } from "ramda";
import getRandomNumber from "./getRandomNumber";
import setPluralForm from "./setPluralForm";
import capitalize from "./capitalize";

function getRandomTeam() {
  const nameAdj = capitalize(faker.word.adjective());
  const nameAnimal = capitalize(setPluralForm(faker.animal.type()));
  const name = concat(concat(nameAdj, " "), nameAnimal);
  const city = faker.address.city();
  const playersList = Array.from({ length: 6 }).map(() =>
    faker.name.findName()
  );
  const score = getRandomNumber(10, 360);

  return {
    name,
    playersList,
    score,
    description: `${name} team is located in ${city}.`,
  };
}

export default getRandomTeam;
