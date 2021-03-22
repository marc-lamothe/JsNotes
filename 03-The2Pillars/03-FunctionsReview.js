// *  Functions Review

// !  Do not initialize functions inside of loops...
// ?    Example:
for (let i = 0; i < 5; i++) {
  function looped() {}
  looped();
}
// *      Instead of initializing the function 5 times like shown above, we should initialize
// *        the function before the loop, then execute it inside the loop as follows:
function improved() {}
for (let i = 0; i < 5; i++) {
  improved();
}
//
//
//
// !  Do not return parameters that aren't defined or passed as arguments into the function
// ?    Example:
function noArgs() {
  return param;
}
noArgs();
// !      This returns an Uncaught ReferenceError
// *        This happens when param isn't in the local or global variable scope. A way to
// *          avoid an error would be to give it a default param as follows:
function defaultArg(param = 6) {
  return param;
}
defaultArg();
//
// *        It is good practice to ensure that default parameters are set on a function as a
// *          way to avoid those edge cases.
