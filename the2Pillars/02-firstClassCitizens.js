// *  First Class Citizens

//    In our last note, we realized that functions can be passed around like other data and this
//      idea of a function being passed around besides just being something that performs
//      actions. Because of this you will often hear:
// *      'functions are first class citizens in JavaScript'
//
//
//
// ?  Being a 'first class citizen means 3 things:
// *    1.  Functions can be assigned to variables and properties of an object
//            example:
var stuff = function () {};
//
// *    2.  Functions can be passed into another function an an argument
//            example:
function a(fn) {
  fn();
}

a(function () {
  console.log('hi there!');
});
//          result: 'hi there!'
//
// *    3.  Functions can be returned as values from other functions
//            example:
function b() {
  return function c() {
    console.log('bye');
  };
}

b();
//            result: ƒ c() {console.log('bye')}
b()();
//            result: 'bye'
var d = b();

d();
//            result: 'bye'
//
//
//
// ?  In summary, the reasons why functions are considered first class citizens in JS are:
// *    We are able to assign functions to variables
// *    We are able to pass functions into arguments
// *    We can also return functions as values from another function
//
// *  In short, Functions are Data.
//      Not only do they perform actions for us, but they are also pieces of data to be
//        passed around like First Class Citizens as if they were JavaScript Types.
//      Anything you can do with other types, you can also do to functions. This idea of a
//        First Class Citizen in JavaScript introduces JS to a whole world called Functional
//        Programming.
