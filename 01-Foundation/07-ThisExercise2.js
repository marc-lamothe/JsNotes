// *  Exercise:
// *    'This' Keyword 2

// ?  Run this code, and you will see there is an issue. How would you fix it?

const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter;

//    How Would you fix this?
console.log('?', giveMeTheCharacterNOW());
//    this should return 'Simon' bud doesn't

// ?  End of sample code

// ?  My Solution:
// *  I made getCharacter return and arrow function, and changed character.getCharacter to a
// *    function call.
const character = {
  name: 'Simon',
  getCharacter() {
    return () => this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter();
console.log('?', giveMeTheCharacterNOW());

// !  Provided Solution:
// *  Andrei made character.getCharacter bind the object of character,
// *    This solution is better, I technically cheated I think...
const character = {
  name: 'Simon',
  getCharacter() {
    return this.name;
  },
};
const giveMeTheCharacterNOW = character.getCharacter.bind(character);
console.log('?', giveMeTheCharacterNOW());
