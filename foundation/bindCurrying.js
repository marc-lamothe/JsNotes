// *  Bind() and Currying
//    Currying: Only partially giving a function a parameter.
//?   An example of 'Function Currying'
function multiply(a, b) {
  return a * b;
}

let multiplyByTwo = multiply.bind(this, 2); //  Sets first parameter (a) = 2
let multiplyByTen = multiply.bind(this, 10); //  Sets first parameter (a) = 10

console.log(multiplyByTwo); //  f multiply(a,b) { return a * b; };
console.log(multiplyByTwo(4)); // 8
console.log(multiplyByTen(10)); // 100

//  By doing this, we were able to reuse a piece of code, give it a partial parameter, and
//    create functions that are extensible - that are more specific, such as multiplyByTwo()
//    or multiplyByTen().
