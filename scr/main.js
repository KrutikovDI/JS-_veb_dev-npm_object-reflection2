export default function extractionSpecialAttack(person) {
  const listAttacks = []
  for (let i in person.special) {
    const listAttack = []
    if (person.special[i].description == undefined) {
      for (let j in person.special[i]) {
        listAttack.push(person.special[i][j])
        }
        listAttack.push('Описание недоступно')
    } else {
      for (let j in person.special[i]) {
        listAttack.push(person.special[i][j])
      }
    }
    listAttacks.push(listAttack)
  }
  return listAttacks
}