const t = [1, 2, 3, 4, 5]

const [first, second, ... rest] = t

console.log(first, second)  // tulostuu 1, 2
console.log(rest)          // tulostuu [3, 4 ,5]

/*
const t = [1, 2, 3]

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)
*/

// tulostuu [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ]

/*
const t = [1, 2, 3]

const m1 = t.map(value => value * 3)
console.log(m1)   // tulostuu [2, 4, 6]
*/

/*

const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)  // tulostuu [1, -1, 3]
console.log(t2) // tulostuu [1, -1, 3, 5]

*/

/*

const arr = [1, -1, 3]

arr.push(5)

console.log(arr.length) // tulostuu 4
console.log(arr[1])     // tulostuu -1

console.log(" ---------- ")
console.log(" -- LOOP -- ")
console.log(" ---------- ")

arr.forEach(value => {
  console.log(value)  // tulostuu 1, -1, 3, 5 omille riveilleen
})

*/