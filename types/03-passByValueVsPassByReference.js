// *  Pass By Value vs Pass By Reference

// *  fact: Primitive Types are immutable, meaning they can not be changed.
//      In order to change a Primitive Type one must remove it to instantiate a new version
//      of the Primitive Type to fill its' place. For example:

let number = 0;
console.log('number= ', number); //  number=  0
//      When we change the value contained within number the old number is dumped from memory.
let number = 1;
console.log('number= ', number); //  number=  1
//      Number is now equal to 1, and the 0 is no longer available in memory.

// *  This is a direct example of Pass By Value, and another follows:
var numA = 5;
var numB = numA;

numB++;

console.log('a: ', numA);
console.log('b: ', numB);

//    All the JS engine did was copy the primative type value 5, as if it was calculating
//      b = 5, so that b now has a reference to the value primitive type 5, all we did was
//      copy the value.
// *  Due to them not having any real connection, it is an example of Pass By Value.
//    We copied the value, and create that value somewhere else in memory.

// *  Pass by Reference (Objects)

let obj1 = { name: 'Yao', password: '123' };
let obj2 = obj1;

obj2.password = 'easyPeasy';

console.log('obj1: ', obj1); //  { name: 'yao', password: 'easyPeasy'}
console.log('obj2: ', obj2); //  { name: 'yao', password: 'easyPeasy'}

// !  Oh dear, that's not what we wanted...
// *  This is due to Pass By Reference.
//    Objects in JS are stored in memory and are passed by reference. This means that we
//      don't copy the values like we do when passing by value like with primative types.
//      As we assigned obj1 as obj2 we simply said 'hey, this is where 'obj2' is in memory.'
//    This means any edits made to the original naturally effect any reference values.
// *  This is good for saving space in memory by reducing redundancy.
// !  This is bad because you can accidentally change a property of another dependant value
//    Let's try another example:

var c = [1, 2, 3, 4, 5];
var d = c;
d.push(123123123123123123213);
console.log('c: ', c); //  [1,2,3,4,5,123123123123123123213]
console.log('d: ', d); //  [1,2,3,4,5,123123123123123123213]

//    Because arrays are objects in JS, when we change one value, both variables change
//      accordingly. However, if you would like to change one array without changing the other
//      there are tricks that override this behaviour, one trick is:

var e = ['a', 'b', 'c'];
var f = [].concat(e);
e.push('d');
console.log('e: ', e); //  ['a', 'b', 'c', 'd']
console.log('f: ', f); //  ['a', 'b', 'c']
//    By creating an empty array to concatenate the original array into, we have created two
//      separate copies of the same array data.

// ?  But how can we clone an object without modifying it like above?

let objA = { a: 'a', b: 'b', c: 'c' };
//    I want to copy this to another location in memory.

let objB = objA; // !  would not help, as it passes a reference.
let clone = Object.assign({}, objA); // * clones an object, 1st parameter is new obj, the
//                                            2nd is target object being cloned.

objA.c = 5; //  changes to original c: value
console.log('objA: ', objA); //  {a: 'a', b: 'b', c: 5}
console.log('clone: ', clone); //  {a: 'a', b: 'b', c: 'c'}

// *  Another way to duplicate the properties of an object using the spread operator:

let clone2 = { ...objA };
console.log('clone2: ', clone2); //  {a: "a", b: "b", c: 5}

// !  Clones of objects that contain objects can be an issue!
//    Because an object contains a reference value, if it is copied using these methods they
//      wind up duplicating the nested object reference values as they are all referring to the
//      same address in memory. This is what's known as a SHALLOW CLONE.
// ?  So, how do we perform a DEEP CLONE?

let target = {
  a: 'a',
  b: 'b',
  c: { deep: 'copy me!' },
};

// ?  So how do we clone the value of an object within an object?
let superClone = JSON.parse(JSON.stringify(target)); //    Parses the JS code into a
//                                                                    JSON string, and saves
//                                                                    it as another duplicate
//                                                                    object.

target.c.deep = 'BWAHAHAHAHA'; // Changing the original
console.log('target: ', target); //  [a: 'a', b: 'b', c: {deep: 'BWAHAHAHAHA'}]
console.log('superClone: ', superClone); //  [a: 'a', b: 'b', c: {deep: 'copy me!'}]

// !  WARNING REGARDING DEEP CLONES
//    JSON.parse(JSON.stringify(target)) can have performance implications.
//    If the object is SUPER deep it will take an enormous amount of time to copy the code
//      each time.
