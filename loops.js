const orders = [500, 30, 99, 15, 223];

'Bad Loop Code 💩'

// const total = 0;
// const withTax = [];
// const highValue = [];
// Fireship HATES these loops
for (i = 0; i < orders.length; i++) {
    // Reduce
    total += orders[i];

    // Map
    withTax.push(orders[i] * 1.1);

    // Filter
    if (orders[i] > 100) {
        highValue.push(orders[i])
    }

    // this code is ugly and is mutating values that might make
    // the code more unpredictable.
}

'Good Loop Code ✅'
// No loop required, single line statements

// Array reduce() method executes a reducer function for an array,
// then returns a single  value, the function's accumulated result.
// * array.reduce(function(total, currentValue)
//   * total is the initialValue, or the previously returned value of the function
//   * Return value is the accumulated result from the last call of the callback function.
// The following is a callback function.
const total = orders.reduce((acc, cur) => acc + cur);
// reduce() essentially summarizes an entire array's contents
// ~can also work for subtraction
const otherTotal = orders.reduce((total, num) => total - num);

// Array map() creates a new array from calling a function for every array element
const withTax = orders.map(value => value * 1.1)

// Filter
const highValue = orders.filter(value => value > 100);