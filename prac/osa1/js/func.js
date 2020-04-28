/** -------------------------------- */
/** ----------- METHODS ------------ */
/** -------------------------------- */

const sum = (p1, p2) => {
    return p1 + p2
  }

const difference = (p1, p2) => {
    return p1 - p2
}

const square = p => {
    // refactor:
    // const square = p => p * p
    return p * p
}

function product(a, b) {
    return a * b
  }

/** -------------------------------- */
/** ------------- MAIN ------------- */
/** -------------------------------- */

const number1 = sum(5, 5)
console.log("SUM: " + number1)

const number2 = difference(10, 5)
console.log("DIFF: " + number2)

const number3 = square(4)
console.log("SQR: " + number3)

const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
console.log(tSquared)

const vastaus = product(2, 6)
console.log("Product: " + vastaus)

const average = function(a, b) {
    return (a + b) / 2
  }
const ans = average(2, 5)

console.log("AVG: " + ans)
