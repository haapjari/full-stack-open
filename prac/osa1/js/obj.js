/* Oliot */

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'Filosofian tohtori',
  }

const object12 = {
    name: 'Full Stack -websovelluskehitys',
    level: 'aineopinto',
    size: 5,
}

const object3 = {
    name: {
      first: 'Juha',
      last: 'Tauriainen',
    },
    grades: [2, 3, 5, 3],
    department: 'TKTL',
}

/* --- */

console.log(object1.name)         // tulostuu Arto Hellas
const fieldName = 'age' 
console.log(object1[fieldName])    // tulostuu 35
const fieldEducation = 'education'
console.log(object1[fieldEducation])

object1.address = 'Tapiola'
object1['secret number'] = 12341
console.log(object1.address) 
console.log(object1['secret number'])

