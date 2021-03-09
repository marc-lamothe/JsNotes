// *  Dynamic vs Static Typing
//    JavaScript is a DYNAMICALLY TYPED language, like PHP, Ruby, Python, and VB.
//    Java is a STATICALLY TYPED language, like C, C++, Scala, Haskell, c# and f#.

// ?  What does Dynamically Typed mean?

var a = 100;  //  This is dynamic because it is considered valid by the JS Engine without
//                    without a specific type declaration.

//      A dynamically typed language allows us to not have to say what type of variable 'a' is
//        going to be. However, for a statically typed language, like C++, that same code 
//        would first require us to state which type of data the variable will contain before
//        assigning it a value.

// ?  Statically Typed Example in C++

int a;
a = 100;  
//    Functional C++ code that essentially does the same thing as the JS example.

// *  In Dynamically Typed languages type checking is done a runtime instead of manually.
//    Because JavaScript does type checking during JIT (Just In Time) Compilation, changes
//      are often done as the user scrolls and explores a website which can effect performance.
//    As a result, JavaScript can assign anything to any variable, and you aren't going to be
//      caught. You may get errors during runtime, but because of this we are able to 
//      disregard type checking, which can look cleaner while coding, as well how this can 
//      not always be ideal, and why that can cause problems.
// !  The MAJOR downside to having such free type checking is error-prone code, especially 
// !    when being worked/relied upon by developers you may not have documented/explained well
// !    enough. 
// !  A primary example would be public library code where all of the inputs and outputs need
// !    to be well documented and type checked or developers will feed them bad information.
