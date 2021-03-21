// *  Functions are Objects

//  Let's start by talking about Functions...

//               Object {}
//               /     \
//          Array[]    Function()

// Functions in JavaScript, are also Objects. Let's explore that...

// TODO  In Review: Functions()
//    When we invoke a function we get two parameters automatically, the 'this' keyword and
//      'arguments' keyword.
//    Arguments is an 'array-like' object that has some weird behaviours for looping and
//      iteration, so we want to avoid using it, preferring the Spread Operator. Additionally,
//      because of the arguments object we can technically not have any parameters defined
//      for a function, and when we call the function, if we add parameters to it, we can
//      still grab them using the arguments keyword.
//    When our functions are defined the compiler looks at our code, it lexcially figures out
//      which variables are available to us in the variable environment, and it also adds
//      our scope chains.
// ?  We also have a few ways of evoking and creating functions:
// *   The traditional way:
function one() {
  return 1;
}

one();
//
// *   As a Method: ( a function inside of an object )
const obj = {
  two() {
    return 2;
  },
};

obj.two();
//  Because the OBJECT is calling two, 'this' is assigned to 'obj' instead of 'window'.
//
// *  Call and Apply
function three() {
  return 3;
}

three.call();
// OR
three();
//
// * Function Constructor
const four = new Function('return 4');

four();
//
//
// Because all functions are objects in JS, we can do things like:
function woohoo() {
  console.log('woooohooooo!');
}

woohoo.yell = 'ahhhhh!!!!';
// ? Behind the Scenes
//    const specialObj = {
//      yell: 'ahhhhh!!!!',
//      name: 'woooohooooo!',
//      (): console.log('woooohooooo!')
//    }
//
// * To Review:
//  _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
// |                                                                                      |
// |  somefunc()                                                                          |
// |                                                                                      |
// |   ________                                                                           |
// |  | Code() |                                                                          |
// |   ````````                                                                           |
// |   _________________                                         ____________             |
// |  | Name (optional) |                                       | Properties |            |
// |   `````````````````                                         ````````````             |
// |                                                          /       |       \           |
// |                                                 _________   __________   _________   |
// |                                                | .call() | | .apply() | | bind.() |  |
// |                                                 `````````   ``````````   `````````   |
// |                                                                                      |
//  ```````````````````````````````````````````````````````````````````````````````````````
//
woohoo.name; // woooohooooo!
woohoo.yell; // ahhhhh!!!!'
//
// Functions are Objects, however Functions are considered 'special' objects that are callable.
//  This is important because functions are just objects in JS, and that means we can pass
//  them around like things that contain data. So besides just doing things for us, and
//  performing actions in our code, we can also store them as data, move them around, and
//  have some interesting applications...
