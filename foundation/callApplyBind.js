// *  call(), apply(), and bind()

//    In order to manipulate the 'this' keyword, there are 3 really important methods:

// ?  call()
// *    Useful for borrowing methods from an object via comma separated parameter arguments
//      Under the hood, in JavaScript, when I do a() to invoke the function, all functions
//        when created have a property named call() that allows us to 'call' the function.
//        So 'a()' is simply a shorthand for 'a.call()'

// ?  apply()
// *    Useful for borrowing methods from an object via argument arrays
//      Does the same thing as 'call()'.
//      The only difference being: instead of call(), which accepts parameters, apply()
//        accepts arrays of parameters.
// *    Use of Call vs Apply is reliant on which types of parameters are easier to pass the
// *      arguments through:
//          An array of parameters
//          Comma separated list of arguments

// ?  bind()
// *    Useful for calling functions later on with a certain context, or certain this keyword
//      Unlike call() and apply(), which both immediately runs a function, bind() returns a
//        new function with a certain context and parameters, and is usually used when we want
//        to call a function later on, with a certain type of context, or 'this' keyword.
//      Like call(), bind() accepts parameters, but doesn't run the function, it returns a
//        function that could be added to a variable, to be used later on.
//      This lets us run 'heal()' as something like 'healArcher()'.
//      Bind() is a band-aid to fix this idea of a dynamically scoped 'this' keyword that
//        ruins our entire lexical scoping discussion we have been having via text notes.
//      Bind() allows us to store whatever this meant in the object from which it was bound.

// *    Example Healing Game
const wizard = {
  name: 'Merlin',
  health: 50,
  heal(num1, num2) {
    return (this.health += num1 + num2);
  },
};

const archer = {
  name: 'Robbin Hood',
  health: 30,
};

//    Base health value
console.log('base:', archer); //  { name: Robbin Hood, health: 30 }

//    Heal 30 health using call()
wizard.heal.call(archer, 10, 20);
console.log('call():', archer); //  { name: Robbin Hood, health: 60 }

//    Heal 30 health using apply()
wizard.heal.apply(archer, [15, 15]);
console.log('apply():', archer); //  { name: Robbin Hood, health: 90 }

//  Heal 10 health using bind()
const healArcher = wizard.heal.bind(archer, 5, 5);
healArcher();
console.log('bind():', archer); //  { name: Robbin Hood, health: 100 }
