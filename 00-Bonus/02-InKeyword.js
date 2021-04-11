// *  In Keyword

//

// ?   Example:

const person = {
  name: 'Kyle',
  age: 25,
};

if (person.name) {
  console.log('Has truthy name value');
}

if ('name' in person) {
  console.log('Has name property');
}

// ?  You can use the in keyword to see if a property is defined on an object.

// !  if (person.name) {} will evaluate to false if person.name is an empty string (name: '')

// *  if ('name' in person) {} always evaluates to true, even when (name: '') |
// *    (name: undefined) | (name:null) because the 'name' property exists within person. If
// *    we were to delete person.name it would evaluate to false.

// ?   Example:

const person = {
  name: 'Kyle',
  age: 25,
};

delete person.name;

if ('name' in person) {
  console.log('Has name property'); //  false
}

console.log(person); //  {age: 25}

//

//

// ?  Provided by:
//      Web Dev Simplified
//      https://www.youtube.com/watch?v=WIP1czLm3CY
