// import { heroes } from './data/heroes'
// import { heroes } from "../data/heroes";

import { heroes } from "./data/heroes";

// console.log(heroes);
const getHeroes = (id) => {
  return heroes.find((heroe) => {
    return true;
  });
};
console.log(getHeroes(2));
