import { faker } from "@faker-js/faker";
import { concat, pipe } from "ramda";
import getRandomNumber from "./getRandomNumber";
import setPluralForm from "./setPluralForm";
import getPlayerDescription from "./getPlayerDescription";

function getRandomPlayer() {
  const gender = faker.name.gender(true);
  const firstName = faker.name.firstName(gender.toLowerCase());
  const lastName = faker.name.lastName();
  const name = concat(concat(firstName, " "), lastName);
  const city = faker.address.city();
  const musicGenre = faker.music.genre().toLowerCase();
  const color = faker.vehicle.color();
  const vehicle = faker.vehicle.vehicle();
  const favoriteAnimal = faker.animal.type();
  const score = getRandomNumber(0, 60);
  const position = ["handler", "cutter"][Math.round(Math.random())];

  return {
    name,
    score,
    position,
    description: getPlayerDescription(
      firstName,
      city,
      favoriteAnimal,
      gender,
      musicGenre,
      color,
      vehicle,
      position
    ),
  };
}

export default getRandomPlayer;
