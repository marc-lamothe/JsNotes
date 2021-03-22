// *  Type Coercion

// ?  Example:

1 == '1'; //  true

// ?  Definition:
//    When the operants - the things to the left and right of the operator -  are different
//      types, like a number 1 and a string '1', one of the values will be converted to an
//      equivalent value by the JS engine. In our example, the JS engine would assume we meant
//      the second operant to be a number type instead of a string type, and evaluate the
//      above example as follows:

1 == 1; //  true, because a number 1 is indeed equal to a number 1. Very truthy indeed,

//    In other words, it means the language converting a certain type to another type.

// ?  Do all languages have type coercion?
// *  Yes.

//    In JavaScript Type Coercion happens when you use the double equals, '==', which simply
//      means to compare the two values. Should they have two different types of values, then
//      the JS Engine attempts to coerce one value into the same type as the other value.

// ?  Example:

1 === '1'; //  false  <- An example of comparing two values without Type Coercion

// ?  Is there ever a time to use '==' over '==='?
// *  Not really.
//    Some people would argue that '==' can actually have some interesting applications, where
//      we coerce something to perform a check really quickly - but it's not predictable code.
//      As such, it can be very confusing, and amount to a gotcha to trick some people, so
//      it's typically best practice to use '==' to avoid this variety of type coercion.

// !  There is another version of Type Coercion to be aware of...
// *  Through an If Statement:
if (0) {
  //  Coerces to false, >=1 coerces to true.
  console.log(5);
}

// *  GREAT RESOURCE : https://dorey.github.io/JavaScript-Equality-Table/
// *    It shows how JS Engine tests for equality in:
// *      '==' / '!=', '===' / '!==', if()

// ?  Moral of the story:
// *    Always use '===' unless you have a good reason to use '=='.

// ? So that's wonderful, but what about this new 'Object.is' thing?

// ?  Definition:
//    Object.is works pretty much the same way that '===' dows, except for a few cases:
//      ~ +0  |  -0
//      ~ -0  |   0
//      ~ NaN | NAN

// ? Example:
-0 === +0; //  true - but they are different things in JS FYI
Object.is(-0, +0); //  false - this proves that point.

// ? Example 2:
NaN === NaN; //  false
Object.is(NaN, NaN); //  true
