// *  Immediately Invoked Function Expression (IIFE)

//    IIFE's are a design pattern used by many popular libraries, with the idea being to place
//    all library code inside the local scope to avoid potential name-space collisions.

(function () {
  //  The first character being '(' indicates it's a function expression
  //
  //  Code lives here
  //
})(); //  Immediately invokes function expression

//    This enables us to attach private data to a function
//    It also creates a fresh environment to prevent Global Execution Context pollution
//    Helps to minimize the amount of data on the Global Execution Context / Global Scope
