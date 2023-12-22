function maxDistance(movements) {
  let distance = 0
  let extra = 0
  movements.split('').forEach((mov) => {
    if (mov === '>') distance++
    if (mov === '<') distance--

    if (mov === '*') extra++
  })

  return Math.abs(distance) + extra
}

const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5

console.log(maxDistance('<<**>>'))
