// *  Dynamic Scope vs Lexical Scope

const a = function () {
  console.log('a:', this); //  window
  const b = function () {
    console.log('b:', this); //  window
    const c = {
      hi: function () {
        console.log('c:', this); //  {hi: f}
      },
    };
    c.hi(); //  AKA window.c.hi()
  };
  b(); //  AKA window.b()
};
a(); //  AKA window.a()
//    As stated in the previous note, the 'this' keyword refers to the object to the left of the
//      function call, so both 'a()' and 'b()' had nothing to their left to reference, they
//      reference the Window by default. 'c.hi()' is an instance where the function call of
//      'hi()' has the object of 'c' as a container, so the console.log within 'hi()' would
//      consider the 'c' object as 'this' as opposed to teh default of Window.

const abc = {
  name: 'Billy',
  sing() {
    console.log('a:', this);
    var anotherFunction = function () {
      console.log('b:', this);
    };
    anotherFunction();
  },
};
abc.sing();
//    a: {name: "Billy", sing: f}
//    b: Window ()

//    Because the 'this' keyword isn't LEXICALLY SCOPED - as in it doesn't matter where it is
//      written, it relies upon how the function was called - what happened under the hood was
//      that 'obj.sing()' ran, and this object's sing function had another function in which
//      it ran. Meaning Object didn't really call another function, the 'sing()' function did.
//    In Javascript 'this' keyword defaults to the window object. This 'this' inconsistency
//      led to countless 'this errors'.

// *  LEXICAL SCOPE vs DYNAMIC SCOPE
// ?  In JavaScript our LEXICALLY SCOPE (available data + variables where the function was
// ?    defined) determines our available variables. Not where the function is called
// ?    (DYNAMIC SCOPE)
// !  There is a footnote, however:
//    Everything in JavaScript is actually LEXICALLY SCOPED, how you write it determines what
//      we have available, except for the 'this' keyword. 'this' is actually DYNAMICALLY SCOPED,
//      that is, it doesn't matter where it is written, it matters how the function was called.

// ?  How can we avoid these pitfalls?
// *  With Arrow Functions!
//    'Arrow Functions are Lexically bound' as they exhibit a lexical
//      'this' behaviour, unlike normal functions.
//    We will now change our example above to include an arrow function:

const abc = {
  name: 'Billy',
  sing() {
    console.log('a:', this);
    var anotherFunction = () => {
      console.log('b:', this);
    };
    anotherFunction();
  },
};
abc.sing();
//    a: {name: "Billy", sing: f}
//    b: {name: "Billy", sing: f}

//    Much better! <3
//    As such, the use of Arrow Functions has helped contain otherwise rampant 'this errors'. :D

// !  A depreciated alternative to the use of Arrow Functions as a solution to 'this' follows:
const abc = {
  name: 'Billy',
  sing() {
    console.log('a:', this);
    var anotherFunction = function () {
      console.log('b:', this);
    };
    return anotherFunction.bind(this);
  },
};
abc.sing(); //  displays the second function
//    a: {name: "Billy", sing: f}
//    f () {
//          console.log('b:', this);
//         }

abc.sing()(); //  displays properly when every potential function is called sequentially
//    a: {name: "Billy", sing: f}
//    b: {name: "Billy", sing: f}

// !  Another depreciated alternative to the use of Arrow Functions as a solution to 'this':
const abc = {
  name: 'Billy',
  sing: function () {
    console.log('a:', this);
    var self = this; //  maintains abc as the object scope
    var anotherFunction = function () {
      console.log('b:', self); // as it has been stored within the abc object, 'this' //  refers to abc as we expect it to
    };
    return anotherFunction;
  },
};
abc.sing()();
//    a: {name: "Billy", sing: f}
//    b: {name: "Billy", sing: f}
