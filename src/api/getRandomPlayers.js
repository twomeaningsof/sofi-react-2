import { faker } from '@faker-js/faker';

function createRandomUser() {
  const gender = faker.name.gender(true);
  const firstName = faker.name.firstName(gender.toLowerCase());
  const lastName =  faker.name.lastName();
  const favoriteAnimal = faker.animal.type();
  const exceptionArray = ['s', 'z', 'ch', 'sh', 'x'];

  const setPluralForm = (word) => {
    exceptionArray.forEach((exception) => {
      word.endsWith(exception) ? word += 'es' : ''
    })

    return word.endsWith('es') ? word : word+'s'
  }

  return {
    firstName,
    lastName,
    image: faker.image.people(),//faker.image.people(1234, 2345) // 'https://loremflickr.com/1234/2345/people'
    description: `${firstName} lives in ${faker.address.city()} and is a big fan of ${setPluralForm(favoriteAnimal)}. When ${gender === 'Male' ? 'he' : "she"} wants to relax, ${gender === 'Male' ? 'he' : "she"} listens to ${faker.music.genre().toLowerCase()}. ${gender === 'Male' ? 'His' : "Her"} favorite color is ${faker.vehicle.color()}, and to prove that ${gender === 'Male' ? 'he' : "she"} owns a ${faker.vehicle.vehicle()} in that color. When it comes to our Ultimate Frisbee team ${gender === 'Male' ? 'his' : "her"} position is ${['handler','cutter'][Math.round(Math.random())]} and ${gender === 'Male' ? 'his' : "her"} main attribute is for sure ${['speed','agility'][Math.round(Math.random())]}.`
  };
}



const getRandomPlayers = () => {
  const USERS = [];

  Array.from({ length: 10 }).forEach(() => {
    USERS.push(createRandomUser());
  });

  return USERS;
}

export default getRandomPlayers;