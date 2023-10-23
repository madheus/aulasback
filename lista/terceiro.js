const rl = require('readline-sync')
let numero= Number(rl.question('digite 1 para feminino ou digite 2 para masculino: '))
while(true) {
    if (numero===1) {
        let altura1 = Number(rl.question('Digite sua altura; '))
        let peso= (Number(altura1)*62.1)-44.7
        console.log(`seu peso ideal é de ${peso}Kg`)
        break
    }
    if (numero===2) {
        let altura2 = Number(rl.question('Digite sua altura; '))
        let peso= (Number(altura2)*72.7)-58
        console.log(`seu peso ideal é de ${peso}Kg`)
        break
    } else {
        console.log('Numero invalido')
        break
    }
}

