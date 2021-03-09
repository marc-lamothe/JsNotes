// *  Exercise:
// *    'This' Keyword

var b = {
  name: 'jay',
  say() {
    console.log('b:', this);
  },
};

var c = {
  name: 'jay',
  say() {
    return function () {
      console.log('c:', this);
    };
  },
};

var d = {
  name: 'jay',
  say() {
    return () => console.log('d:', this);
  },
};

b.say();
// *  Answer: b: { name: 'jay', say: [function] }
//    'this' is referring to the b object.

c.say();
// *  Answer: f () {console.log('c:', this)}
//    This time we are returning a function, so the say function is going to return another
//      function, which will return console.log('c:', this).
//    When we run c.say() we are returned a function, so what happens if I run it again?

c.say()();
// *  Answer: Window
//    A method that has a function inside of it has its' this bound to Window as an unintended
//      consequence of JavaScript's Dynamically Scoped 'this'

d.say();
// *  Answer: () => console.log('d:', this)
//    It returns the function. However if we call it again, what would happen?

d.say()();
// *  Answer: d: { name: 'jay', [function]}
//    It fixed our problem! The 'this' keyword was lexically scoped inside of the arrow
//      function, and it doesn't care about where it was called.
