// * Array.isArray()

var array = ['1', '2', '3'];

//  Is the same as:
var array = {
  0: '1',
  1: '2',
  2: '3',
};

//  Which of course means:
typeof []; //  "object"

// ?  So how do we find out if an object is really an array?
// *  Array.isArray()

Array.isArray([1, 2, 3]); //  true
Array.isArray(['1', '2', '3']); //  true
Array.isArray({}); //  false
