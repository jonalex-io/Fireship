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