const rl = require('readline-sync')

let Neleitores = Number(rl.question('quantos eleitores tem? '))
let vbranco = Number(rl.question('quantos votos em branco? '))
let vnulos = Number(rl.question('quantos anularam o vot? '))
let vvalidos = Number(rl.question('numero de votos validos? '))
let branco = Number((vbranco) / Number(Neleitores)) * 100
let nulos = Number((vnulos) / Number(Neleitores)) * 100
let valido = Number((vvalidos) / Number(Neleitores)) * 100

console.log(`votos em branco ${branco}% de ${Neleitores}`)
console.log(`votos em branco ${nulos}% de ${Neleitores}`)
console.log(`votos em branco ${valido}% de ${Neleitores}`)