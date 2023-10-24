const rl = require('readline-sync')
let dia = rl.question('que dia é hoje: ')
while(true) {
if (dia === 'sabado') {
    console.log('final de semana')
    break
}
if (dia === 'domingo') {
    console.log('final de semana')
    break
} else {
    console.log('dia util')
    break
}
}