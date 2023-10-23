const rl = require('readline-sync')
let dia = rl.question('que dia é hoje: ')
if (dia === 'sabado') {
    console.log('final de semana')
}
if (dia === 'domingo') {
    console.log('final de semana')
} else {
    console.log('dia util')
}