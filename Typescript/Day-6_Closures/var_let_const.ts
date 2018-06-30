'use strict';

/* var x = "outside";
function foo() {
  var x = "inside";
  console.log(x);
}
foo(); // inside
console.log(x); // outside */

// 1> var's are function-scoped: scope is limited to the function it was defined in.

/* function foo() {
    var i = 0;
}
console.log(i); // ReferenceError: i is not defined */

// 2> var’s are not block-scoped: scope is not limited to the block it was defined in.

/* var i = 0
if (true) {
    var i = 1;
}
console.log(i); // 1 */

// 3> let variables are block-scoped!

/* let i = 0;
if (true) {
    let i = 1;
}
console.log(i); // 0 */