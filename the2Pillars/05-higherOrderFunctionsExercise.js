// *  Higher Order Functions: Exercise

// ?  How do we create a generic function that creates other functions?
//
const multiplyBy = function (num1) {
  return function (num2) {
    return num1 * num2;
  };
};

const multiplyByTen = multiplyBy(10);

multiplyByTen(4); //  40
multiplyByTen(10); //  100

const multiplyByHundred = multiplyBy(100);

multiplyByHundred(4); //  400
multiplyByHundred(10); //  100
//
//
//
// ?  That's cool, but is there a better way to do this?
// *    Indeed, by using Arrow Functions we can have much more clean code.
//
const multiplyBy = (num1) => (num2) => num1 * num2;

multiplyBy(5)(2); //  10
multiplyBy(420)(69); //  28980

// *  Nice...
