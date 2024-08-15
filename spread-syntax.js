const pikachu = { name: 'Pikachu 🐭' };
const stats = { hp: 40, attack: 60, defense: 45 }

'Bad Object Code 💩'
// Mutates the original object when you'd most likely rather create
// a new immutable object.
pikachu['hp'] = stats.hp
pikachu['attack'] = stats.attack
pikachu['defense'] = stats.defense

// OR
// Each level up may be defined as its own object.
// ...not the worst but there's still a better more concise way.

// const lvl0 = Object.assign(pikachu, stats)
// const lvl1 = Object.assign(pikachu, { hp: 45 })

'Good Object Code ✅'
// SPREAD SYNTAX
// create a new object, and place existing objects within
// ~syntactic sugar, makes code more readible

const lvl0 = { ...pikachu, ...stats }
const lvl1 = { ...pikachu, hp: 45 }

// SYNTACTIC SPREAD ARRAYS

let pokemon = ['Arbok', 'Raichu', 'Sandshrew'];

'Bad Array Code 💩'

pokemon.push('Bulbasaur')
pokemon.push('Metapod')
pokemon.push('Weedle')

'Good Array Code ✅'

// Push
pokemon = [...pokemon, 'Bulbasaur', 'Metapod', 'Weedle']

// Unshift
pokemon = ['Bulbasaur', 'Metapod', 'Weedle', ...pokemon]

// Splice
pokemon = ['Bulbasaur', ...pokemon, 'Metapod', 'Weedle']


// **************
// ***** W3 *****
// The JavaScript spread operator (...) allows us to
// quickly copyall or part of an existing array or object
// into another array or object.

// Combining arrays
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

// Combining objects
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',
    color: 'red'
}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }