function organizeGifts(gifts) {
  let matches = gifts.match(/(\d+)([a-zA-Z])/g)
  let final = []

  const getPales = (qty) => {
    return Math.floor(qty / 50)
  }
  const getBoxes = (qty, pales) => {
    const diff = qty - pales * 50
    return Math.floor(diff / 10)
  }
  const getBags = (qty, pales, boxes) => {
    const diff = qty - pales * 50 - boxes * 10
    return diff
  }

  matches.forEach((match) => {
    let quantity = parseInt(match.match(/\d+/)[0])
    let gift = match.match(/[a-zA-Z]/)[0]
    let pales = getPales(quantity)
    let boxes = getBoxes(quantity, pales)
    let bags = getBags(quantity, pales, boxes)
    let bagString = bags > 0 ? `(${gift.repeat(bags)})` : ''
    final.push(
      `[${gift}]`.repeat(pales) + `{${gift}}`.repeat(boxes) + bagString
    )
  })

  return final.join('')
}

const result1 = organizeGifts(`76a11b5c`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'
