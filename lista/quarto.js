const rl = require('readline-sync')
let idade= Number(rl.question('Digite sua idade; '))

if (idade <=12 ) {
    console.log('Categoria infantil')
}
if (idade <= 16) {
    let peso= Number(rl.question('Digite seu peso; '))
    if (peso <= 40) {
        console.log('categoria: Juvenil leve')
    }
    if (peso > 40){
        console.log('categoria: Juvenil pesado')
    }
}
if (idade <= 24) {
    let peso= Number(rl.question('Digite seu peso; '))
    if (peso <= 45) {
        console.log('categoria: Senior leve')
    }
    if (peso <= 60) {
        console.log('categoria: Senior medio')
    } else {
        console.log('categoria: Senior pesado')
    }
}
else {
    console.log('categoria: Veterano')
}