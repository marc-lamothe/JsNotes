// *  this Keyword

// *  ' this is the object that the function is a property of '
//    Wo we have an object with a function which has access to 'this', which references the object

//    When you run your code, the code is first ' hoisted ' before creating a Global Object and
//      'this' within the Global Execution Context.

function a() {
  console.log(this); //   deno run = undefined | browser = window
} // a();

//! Avoid using 'this' in the Global Execution Context
//  A common error is assuming 'this' will mean something other than the window at execution
function b() {
  'use strict';
  console.log(this); //   deno run = undefined | browser = undefined
}
// b();

// *  'use strict':
//    Was added to JS as a way for us to avoid common mistakes that happen with JS
//    'use strict' can be added at the first line of a function or at the beginning of our script

const obj = {
  name: 'Jacob',
  sing() {
    return 'lalala ' + this.name;
  },
  singAgain() {
    return console.log('obj:', 'lalala ' + this.name + '!');
  },
};
obj.sing(); //  'lalala Jacob'

// *  Rule of Thumb
//    'this' refers to whatever is to the left of hte '.'
//    for obj.sing(), because the sing() method is within the 'obj' object, the 'this' contained within
//      refers to the object 'obj', being that it is left of the '.' :p

// *  Functions vs Methods
//    Functions are functions, whereas Methods are functions nested within objects.

obj.singAgain(); //  'lalala Jacob!'

// !  DRY - Don't Repeat Yourself
//    A better way to do this is to CALL this sing method then add the '!' to it.

const neoObj = {
  name: 'Jacob',
  sing() {
    return 'lalala ' + this.name;
  },
  singAgain() {
    return console.log('neoObj:', this.sing() + '!', 'DRY');
  },
};
neoObj.singAgain(); //  'lalala Jacob!'

// *  The reasons why this was added to JS to begin with are:
// ?     1: It gives methods access to their object
// ?     2: Allows us to execute the same code for multiple objects (see example)

function importantPerson() {
  console.log(this.name + '!');
}

const name = 'Sunny';
const obj1 = {
  name: 'Cassy',
  importantPerson: importantPerson,
};
const obj2 = {
  name: 'Andrei',
  importantPerson: importantPerson,
};

console.log('name:', name); // 'name Sunny'
// importantPerson();       // browser console = 'Window'
obj1.importantPerson(); // 'Cassy!'
obj2.importantPerson(); // 'Andrei!'
