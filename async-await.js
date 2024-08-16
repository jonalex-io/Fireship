// "Producing code" is code that can take some time
// "Consuming code" is code that must wait for the result
// A Promise is an Object that links Producing code and Consuming code

// Promise then() method
// * then() method provides two callacks:
//   * one function to run when promise is fulfilled
//   * one function to run when promise is rejected

const random = () => {
    return Promise.resolve(Math.random())
}

'Bad Promise Code 💩'

// const sumRandomAsyncNums = () => {
//     let first;
//     let second;
//     let third;

//     return random()
//         .then(value => {
//             first = value;
//             return random();
//         })
//         .then(value => {
//             second = value;
//             return random();
//         })
//         .then(value => {
//             third = value;
//             return first + second + third
//         })
//         .then(value => {
//             console.log(`Result ${value}`)
//         })
// }
// and then... and then... and then...

'Good Promise Code ✅'

// * simply add async in front of the function which forces
// it to return a promise.
// * may use await in front of promises and have them resolve to variables
const sumRandomAsyncNums = async () => {
    const first = await random();
    const second = await random();
    const third = await random();

    console.log(`Result ${first + second + third}`);
}