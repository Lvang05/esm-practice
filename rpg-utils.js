// todo: make this your default export
const createCharacter = (name, characterClass) => {
  return {
    name: name,
    class: characterClass,
    level: 1,
    hp: 100
  }
}

// todo: make these your named exports
const calculateDamage = (attackPower, defense) => {
  const damage = attackPower - defense
  return damage > 0 ? damage : 0
}

const calculateManaCost = (spellLevel) => {
  return spellLevel * 10
}

export default createCharacter
export { calculateDamage, calculateManaCost }
