// *  Higher Order Functions

// ?  Definition:
// *    Higher order functions are a function that can take a function as an argument,
// *      or a function that returns another function.
//    The issue is that most people don't understand WHY they are useful, or WHY we care.
//    To improve our understanding of HOF, let's break down the other types of functions...
//
// *  fucntion() ~ A basic function
// ?    Example:
//
function letAdamLogin() {
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i);
  }
  return 'Access Granted to Adam.';
}
letAdamLogin();

function letEvaLogin() {
  let array = [];
  for (let i = 0; i < 100000; i++) {
    array.push(i);
  }
  return 'Access Granted to Eva.';
}
letEvaLogin();
//
// !    DRY ~ DO NOT REPEAT YOURSELF
// *      A major downfall to this structure of an authentication script is that each user
// *        has a whole function when the task of authentication could simply authenticate
// *        given a set of arguments.
//
//
//
// *  function(a,b) ~ A Function that accepts Parameters as superpowers
// ?    Example:
//
const giveAccessTo = (name) => 'Access Granted to ' + name;
function letUserLogin(user) {
  //  we now tell it WHAT DATA to use
  let array = [];
  for (let i = 0; i < 100000; i++) {
    array.push(i);
  }
  return giveAccessTo(user);
}
letUserLogin('Jesus');
//
// *    We now have more flexibility and we now have the ability to define the data used when
// *      we invoke a function.
//
//
//
// *  Higher Order Function ~ A function that takes other functions as arguments
// ?    Definition:
// *      HOF allow us to both give it the data and also tell the function what to do (extra
// *        abilities) when we call the function.
// ?    Example:  We have users AND admin now...
//
const giveAccessTo = (name) => 'Access Granted to ' + name;
function authenticate(person) {
  let array = [];
  if (person.level === 'admin') {
    verify = 500000;
  } else {
    verify = 100000;
  }
  for (let i = 0; i < verify; i++) {
    array.push(i);
  }
  return giveAccessTo(person.name);
}
function sing(person) {
  return 'lalalalalalalalalala my name is ' + person.name;
}
function letPerson(person, fn) {
  if (person.level === 'admin') {
    return fn(person);
  } else if (person.level === 'user') {
    return fn(person);
  }
}

letPerson({ level: 'user', name: 'Timmy' }, authenticate);
letPerson({ level: 'admin', name: 'Rudolf' }, authenticate);
letPerson({ level: 'admin', name: 'Sally' }, sing);
//
// *    We have now gained the power to not only tell it what data to use, but we also got
// *      the power to tell it what to do.
