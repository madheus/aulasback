const rl = require("readline-sync")
console.log('Bem Vindo Jogador')
console.log('')
let nomeplayer = rl.question('por fazor Digite seu nome/apelido: ')
console.log('Agora vamos escolher sua raca(elas não alteram as estastisticas ainda, nem aparencia pois não temos front ainda)')
let raca = rl.question('As opções são; Humano, elfo, anão, orc, lizardman: ')
console.log('Vamos as classes agora:')
console.log('Guerreiro: utiliza uma arma de uma mão com escudo')
console.log('Espadachim magico: Utiliza armas de uma mão com magias')
console.log('Barbaro: utiliza armas de duas mãos ou duas armas de uma mão')
console.log('Arqueiro: Utiliza arcos/opção de usar duas adagas juntas')
console.log('Mago:utiliza todas as magias disponiveis/Bonus de potencia em magias pois utiliza as duas mãos nelas')
let classe = rl.question('Digite sua classe escolhida: ')

