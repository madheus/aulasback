const rl = require ('readline-sync')
let graus = Number(rl.question('Qnts graus? '))
let aa = Number(graus) + 32
let ab = Number(aa) * 9
let ac = Number(ab) / 5
console.log(`esta ${ac}F`)
