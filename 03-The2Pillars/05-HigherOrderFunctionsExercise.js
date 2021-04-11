// *  Higher Order Functions: Exercise

// ?  How do we create a generic function that creates other functions?
//
const multiplyBy = function (num1) {
  return function (num2) {
    return num1 * num2;
  };
};

const multiplyByTen = multiplyBy(10);

console.log(multiplyByTen(4)); //  40
console.log(multiplyByTen(10)); //  100

const multiplyByHundred = multiplyBy(100);

console.log(multiplyByHundred(4)); //  400
console.log(multiplyByHundred(10)); //  100
//
//
//
// ?  That's cool, but is there a better way to do this?
// *    Indeed, by using Arrow Functions we can have much more clean code.
//
const multiplyBy2 = (num1) => (num2) => num1 * num2;

console.log(multiplyBy2(5)(2));
console.log(multiplyBy2(420)(69));

// *  Nice...
