// *  Block Statements

//

//  ?   Example:

const a = 1; //  Set in Global Scope

function main() {
  const a = 2; //  Set in Function Scope of main()
  console.log(`In Main: ${a}`);
}

main();
console.log(`In Global: ${a}`);

// ?    Result:

//        In Main: 2
//        In Global: 1

// *    This is how traditional scoping works in JavaScript, however we can also create new
// *      scopes WHEREVER we want using objects denoted by {}

// *    A unique aspect of JS is that you can simply place code within {} to establish scope:

// ?    Example:
{
  const a = 3;
  console.log(`In Curly Braces: ${a}`);
}

main();
console.log(`In Global: ${a}`);

// ?    Result:

//        In Curly Braces: 3
//        In Main: 2
//        In Global: 1

//

// *    While this may not be useful in most circumstances, it is very helpful is when using
// *      Switch Statements:

// ?    Example:
const a = 1;
switch (a) {
  case 1: {
    const result = a * 2;
    console.log(result);
    break;
  }

  case 2: {
    const result = a / 2;
    console.log(result);
    break;
  }
  case 3: {
    const result = a + 2;
    console.log(result);
    break;
  }
}

//

//

// *  Provided by:
//
//      Web Dev Simplified
//      https://www.youtube.com/watch?v=WIP1czLm3CY
