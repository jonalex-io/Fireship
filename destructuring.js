const turtle = {
    name: 'Bob 🐢',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
}

// Want to create a function returning how to feed the animal.

'Bad Code 💩'
// * The entire string is enclosed in backticks, which define a template literal
//    * allows you to insert variables or expressions directly into the string
// * Within a template literal, ${...} allows you to insert an expression/variable into the string
//    * The expression inside `${...}` is evaluated and the result is inserted into the string
//    * Template Strings using backticks (`) allow for interpolation ${...}
function feed(animal) {
    return `Feed ${animal.name} ${animal.meal} kilos of ${animal.diet}`;
}

'Good Code ✅'
// * In order to avoid verbose repetition of the animal object, & if you only require a handful of an object's properties, destructure within the function's argument itself
// * note you do not have to mention the object name
// * beneficial for big objects with numerous properties
function feed({ name, meal, diet }) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
}
// OR 
function feed(animal) {
    const { name, meal, diet } = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

console.log(feed(turtle));