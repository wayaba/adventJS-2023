function drawGift(size, symbol) {
  if (size === 1) return '#\n'
  const rows = []
  rows[0] = '#'.repeat(size).padStart(size * 2 - 1)
  rows[size * 2 - 2] = '#'.repeat(size)
  rows[size - 1] = `${'#'.repeat(size)}${symbol.repeat(size - 2)}#`

  for (let row = 1; row < size - 1; row++) {
    rows[row] = `${' '.repeat(size - row - 1)}#${symbol.repeat(
      size - 2
    )}#${symbol.repeat(row - 1)}#`
    rows[size * 2 - row - 2] = `#${symbol.repeat(size - 2)}#${symbol.repeat(
      row - 1
    )}#`
  }
  return rows.join('\n').concat('\n')
}

//console.log(drawGift(4, '+'))

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, '*'))
/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

//drawGift(1, '^')
/*
#
*/
