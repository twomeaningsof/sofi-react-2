import { ifElse, equals, always, isNil, any, join } from "ramda";
import setPluralForm from "./setPluralForm";
import capitalize from "./capitalize";

const getPersonalPronoun = ifElse(equals("Male"), always("he"), always("she"));
const getPossessiveAdjective = ifElse(
  equals("Male"),
  always("his"),
  always("her")
);

const getDefaultSentence = (firstName, city, favoriteAnimal) =>
  ifElse(
    any(isNil),
    always(""),
    always(
      `${firstName} lives in ${city} and is a big fan of ${setPluralForm(
        favoriteAnimal
      )}.`
    )
  )([favoriteAnimal, city]);

const getMusicGenreSentence = (musicGenre, gender) =>
  ifElse(
    isNil,
    always(""),
    always(
      `When ${getPersonalPronoun(gender)} wants to relax, ${getPersonalPronoun(
        gender
      )} listens to ${musicGenre}.`
    )
  )(musicGenre);

const getColorVehicleSentence = (color, vehicle, gender) =>
  ifElse(
    any(isNil),
    always(""),
    always(
      `${capitalize(
        getPossessiveAdjective(gender)
      )} favorite color is ${color}, and to prove that ${getPersonalPronoun(
        gender
      )} owns a ${vehicle} in that color.`
    )
  )([color, vehicle]);

const getUltimateFrisbeeSentence = (position, gender) =>
  ifElse(
    isNil,
    always(""),
    always(
      `When it comes to our Ultimate Frisbee team ${getPossessiveAdjective(
        gender
      )} position is ${position} and ${getPossessiveAdjective(
        gender
      )} main attribute is for sure ${
        ["speed", "agility"][Math.round(Math.random())]
      }.`
    )
  )(position);

const getPlayerDescription = (
  firstName,
  city,
  favoriteAnimal,
  gender,
  musicGenre,
  color,
  vehicle,
  position
) =>
  join(" ", [
    getDefaultSentence(firstName, city, favoriteAnimal),
    getMusicGenreSentence(musicGenre, gender),
    getColorVehicleSentence(color, vehicle, gender),
    getUltimateFrisbeeSentence(position, gender),
  ]);
export default getPlayerDescription;
