// todo: Import the default and named exports from rpg-utils.js
import createCharacter, { calculateDamage, calculateManaCost } from './rpg-utils.js'
// Test the default export
const hero = createCharacter('Aragorn', 'Warrior')
console.log(hero)

// Test the named exports
const damage = calculateDamage(50, 20)
console.log(`Attack deals ${damage} damage!`)

const manaCost = calculateManaCost(5)
console.log(`Level 5 spell costs ${manaCost} mana`)

