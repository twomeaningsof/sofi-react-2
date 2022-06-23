# Assignment - React 2

---

## Configuration steps

<details>

- Make a copy of your React 1 repository with review changes applied, make sure to have this README.md present

</details>

## Assignment goal

<details>

The goal of this assignment is to modernize your freshly-completed React project with a proper functional package stack, as well as refactor your pure CSS into a more modern solution in form of styled-components, training your css-in-js skill.

</details>

## Formal requirements

<details>

**_KEEP IN MIND_**
Pay extra attention to using Fluture properly, where it benefits your project.

**_TECHNICAL REQUIREMENTS_**

- your application should be refactored to take advantage of Fluture **wherever possible**
- loading and error states should be handled via Fluture
- your application should contain a minimal amount of .css files - refactor to use styled-components instead
- your application should take advantage of pipeline operator **wherever possible**
- components and logic should aim to be reusable

</details>

# Assignment - React 1

---

## Configuration steps

<details>

- Fork this repository to have this README.md present
- Set your application with React up - **_WITHOUT CREATE-REACT-APP or similar_**

</details>

## Assignment goal

<details>

The goal of this assignment is to set up a functioning React application, utilizing previously written code that now will have to undergo some refactorization, as well as using most of React's basic functionalities.

</details>

## Formal requirements

<details>

**_KEEP IN MIND_**
This task will require you to use your players/teams code - however, your HTML/CSS tasks are all themed differently. Try to make players/teams fit that theme - be it a team of hockey players, a team of random professions or familiada :)

Your application should utilize **_BOTH_** your HTML/CSS and JS projects, refactored accordingly.

**_TECHNICAL REQUIREMENTS_**

- your application will be available via **yarn dev**
- your JS assignment code - fake "backend" for this project - should now generate players and teams with information about them - name, surname, description for players; team name, list of player names, description for teams
  - there should now be 1-3 second delay when requesting players/teams, **_per request, not per team/player_**
  - there should be a 20% chance to get an error, **_per request, not per team/player_**
  - loading state and error state must be handled appropriately
  - you should use either a short predefined list to generate from, or a specialized module (such as faker)
- upper navbar should contain two links - to a list of players and to a list of teams
  - your application should contain routing to accomodate this
- your application should fetch 2000 players/teams
- left navbar should now be a pagination component, used to navigate the whole list of players/teams, 20 per page for players, 10 per page for teams
- you should split the whole list into pages locally
- clicking on "details" button should show a modal window with a bigger version of the card that will fit all the details that may be cut off in small-format cards
- Ramda must be utilized wherever possible
- components should be reusable where possible
- try to look for an optimal solution to problems that arise, especially regarding your bundler configuration
- player list should be sorted by player name and surname
- team list should be sorted by team name

</details>
