import { faker } from "@faker-js/faker";
import getRandomNumber from "./getRandomNumber";
import setPluralForm from "./setPluralForm";

function getRandomPlayer() {
  const gender = faker.name.gender(true);
  const firstName = faker.name.firstName(gender.toLowerCase());
  const lastName = faker.name.lastName();
  const position = ["handler", "cutter"][Math.round(Math.random())];
  const favoriteAnimal = faker.animal.type();

  return {
    name: `${firstName} ${lastName}`,
    score: getRandomNumber(0, 60),
    position,
    description: `${firstName} lives in ${faker.address.city()} and is a big fan of ${setPluralForm(
      favoriteAnimal
    )}. When ${gender === "Male" ? "he" : "she"} wants to relax, ${
      gender === "Male" ? "he" : "she"
    } listens to ${faker.music.genre().toLowerCase()}. ${
      gender === "Male" ? "His" : "Her"
    } favorite color is ${faker.vehicle.color()}, and to prove that ${
      gender === "Male" ? "he" : "she"
    } owns a ${faker.vehicle.vehicle()} in that color. When it comes to our Ultimate Frisbee team ${
      gender === "Male" ? "his" : "her"
    } position is ${position} and ${
      gender === "Male" ? "his" : "her"
    } main attribute is for sure ${
      ["speed", "agility"][Math.round(Math.random())]
    }.`,
  };
}

export default getRandomPlayer;
