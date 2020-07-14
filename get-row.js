// Your code here.
// (With the following added to get you started.)
// The 2D array we'll need to reference to return the right data.
// Check it out to see its content and shape!
const pokemon = require('./pokemon.js');

const getRow = function(nameLookingFor){
  for(let pokeRow of pokemon){
    const currentPokemon = pokeRow[0];
    if (currentPokemon === nameLookingFor){
      return currentPokemon;
    }
  }
return null
}
console.log(getRow('bulbasaur'))

// OUR code here.

if (typeof getRow === 'undefined') {
  getRow = undefined;
}

module.exports = getRow;
