// Learning Source: JavaScript Pro Tips - Code This, NOT That
// https://www.youtube.com/watch?v=Mus_vwhTCq0&t=114s

// ********************************
// ***** CONSOLE_LOGGING_DATA *****
const foo = { name: 'tom', age: 30, nervous: false };
const bar = { name: 'dick', age: 40, nervous: false };
const baz = { name: 'harry', age: 50, nervous: true };

'Bad Code 💩'

console.log(foo);
console.log(bar);
console.log(baz);

'Good Code ✅'

// * % can substitute data as well as CSS styles
// * %c in the 1st argument applies to the logged text, 2nd argument is the styling
console.log('%c My Friends', 'color: orange; fontweight: bold; font-size: 200%;');
// Computed Property Names
// * variables are added to object
console.log({ foo, bar, baz });
// create a table of the data
console.table([foo, bar, baz])

// ********************************
// ***** CONSOLE_LOGGING_TIME *****
// * For benchmarking performance
console.time('looper');
let i = 0;
while (i < 1000000) { i++ };
console.timeEnd('looper');

// *************************
// ***** STACK_TRACING *****
// * e.g. an important but fatal function must NOT be called twice
// * console.trace to get a stack trace for where it was called & what defined it
const deleteMe = () => console.trace('bye bye database');
deleteMe();
deleteMe();