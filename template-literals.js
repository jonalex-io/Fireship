const horse = {
    name: 'Topher 🐴',
    size: 'large',
    skills: ['jousting', 'racing'],
    age: 7
}

'Bad String Code 💩'

// note .join
let bio = horse.name + ' is a ' + horse.size + ' horse skilled in ' + horse.skills.join(' & ');
// console.log(bio)

// * TEMPLATE LITERALS solve the annoyance of string concatenation and spacing
// * Interpolate directly in the string
// * easier to read/maintain
'Good String Code ✅'
const { name, size, skills } = horse;
bio = `${name} is a ${size} horse skilled in ${skills.join(' & ')}`
console.log(bio);

// FUNCTIONAL_STRINGS
// Strings built in purely function way
function horseAge(str, age) {
    // ternary (conditional) operator, an if-else shorthand
    const ageStr = age > 5 ? 'old' : 'young';
    return `${str[0]}${ageStr} at ${age} years`;
}
// * Note you do not need a regular argument, but instead can use a template literal
// * String segments are parsed as array of strings to the first argument of the function we defined
// * A single argument is used to compose multiple values in the return string.
const bio2 = horseAge`This horse is ${horse.age}`;
console.log(bio2);