// *  Javascript Types
//
// ?  The 7 types in JavaScript are:
// *  Number    = 5                         = Primative
// *  Boolean   = true                      = Primative
// *  Strings   = 'To be or not to be...'   = Primative
// *  Symbol    = Symbol('just me')         = Primative
// *  Undefined = undefined                 = Primative
// *  Null      = {}                        = Primative
// *  Objects       = {}                    = Non-primative
// *    - Arrays    = []                    = Non-primative
// *    - Functions = function(){}          = Non-primative

// *   Typeof Operator
//      The typeof operator displays the tye of an item for development purposes.

console.log('typeof:', typeof 5); //  number
console.log('typeof:', typeof true); //  boolean
console.log('typeof:', typeof 'To be or not to be...'); //  string

// *  Symbol
//    A symbol is from ES6, it creates a unique opportunity: a symbol value, in our case being
//      'just me', is useful for identifying an object.
//    They are usually used for object properties, so that the object's property is unique.
//    Offers new options for utilizing object properties.
console.log('typeof:', typeof Symbol('just me')); //  symbol

// *  Undefined
//    The absence of a definition.
//    It is used as the default value when the JavaScript engine
//      initializes our variables, see 'Hoisting'.
//    In cases where functions return undefined when they don't return anything, when they
//      don't have a return keyword in a function.
//    Another case is when there are missing properties of an object.
//    In summary, undefined simply means that there is a variable there, but there is nothing
//      there.
console.log('typeof:', typeof undefined); //  undefined

// *  Null
//    The absence of value.
console.log('typeof:', typeof null); //  object

// ?  Wait, null has the type of object? Why is that?
// *  This is a mistake acknowledged by the creator of JavaScript. Nothing to see here...

// *  Objects
console.log('typeof:', typeof {}); //  object
console.log('typeof:', typeof []); //  object
console.log('typeof:', typeof function () {}); //  function

//               Object {}
//               /     \
//          Array[]    Function()
//
//    As this model shows, Arrays and Functions are both Objects.
//      Null too, lmao.
//    Even though typeof function(){} gives us function, it is still an object.
//    To crystalize this point, see this example:
function a() {
  return 5;
}
a.hi = 'hihihihihi';
console.log('a.hi:', a.hi); //  a.hi: hihihihihi

// ?  What is a Primative Type?
// *    A primitive is a data that only represents a single value.
//      So for our Number value of 6, the data stored in memory is the 5.
//      A variable of a Primative type directly contains a value of that type. An atom.
//
//
// ?  What is a Non-primative Type?
// *    A non-primitive is a data that doesn't contain the actual value directly.
//      So if we have an object that has property of a: 'Tom', the object doesn't actually
//        contain the value directly, instead it has a REFERENCE, similar to a POINTER, which
//        is a breadcrumb that allows the object to find the respective values when called.

const obj1 = {
  a: 'Tom', //  This value is held as a reference, to be updated on call.
};

// *  Standard Built-in Objects
//    { https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects }

// !  "everything in JavaScript is an object" ~ common quote (slightly misleading)
// *  An example of JS wonkiness:
true.toString(); //  'true'

//    While the Boolean value of true is a primative type, by accepting dot notation and
//      supporting toString() function JS is being sneaky. It silently creates a wrapper
//      object around the boolean value of true, whenever we attempt to access a property of a
//      primative.
