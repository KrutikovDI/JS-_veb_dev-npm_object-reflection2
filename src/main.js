export default function extractionSpecialAttack(person) {
  let attaksList = []
  for (let index in person.special) {
      let { id, name, icon, description = 'Описание недоступно'} = person.special[index];
      attaksList.push([id, name, icon, description])
  }
  return attaksList
}