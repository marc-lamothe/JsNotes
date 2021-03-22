// *  Exercise:
// *    Pass By Value vs Pass By Reference - Compare Objects

// ! code:

var user1 = { name: 'nerd', org: 'dev' };
var user2 = { name: 'nerd', org: 'dev' };
var eq = user1 == user2;
alert(eq); // gives false

// !  /code

// ?  How would you compare two objects if they are pointing to a different location in
// ?    memory but still have the same properties?

// *  Fast and Limited:
//    Works when you have simple JSON-style objects without methods and DOM nodes inside:
var user1 = { name: 'nerd', org: 'dev' };
var user2 = { name: 'nerd', org: 'dev' };
var eq = JSON.stringify(user1) === JSON.stringify(user2);
alert(eq); //  gives true
