const rl= require('readline-sync')
let ano = Number(rl.question('Digite o ano atual; '))
let pessoa1 = Number(rl.question('Digite sua data de nascimento; '))
let pessoa2 = Number(rl.question('Digite sua data de nascimento; '))
let pessoa3 = Number(rl.question('Digite sua data de nascimento; '))
let pessoa4 = Number(rl.question('Digite sua data de nascimento; '))
let pessoa5 = Number(rl.question('Digite sua data de nascimento; '))
//
let ano2029 = Number(2029)-Number(ano)
//
let calculo1 = Number(ano) - Number(pessoa1)
let calculo2 = Number(ano) - Number(pessoa2)
let calculo3 = Number(ano) - Number(pessoa3)
let calculo4 = Number(ano) - Number(pessoa4)
let calculo5 = Number(ano) - Number(pessoa5)
//
let idadeem2029 = Number(calculo1) + Number(ano2029)
let idade2em2029 = Number(calculo2) + Number(ano2029)
let idade3em2029 = Number(calculo3) + Number(ano2029)
let idade4em2029 = Number(calculo4) + Number(ano2029)
let idade5em2029 = Number(calculo5) + Number(ano2029)
//
console.log(`pessoa 1: idade atual ${calculo1}`)
console.log(`sua idade em 2029 sera de ${idadeem2029}`)

console.log(`pessoa 2: idade atual ${calculo2}`)
console.log(`sua idade em 2029 sera de ${idade2em2029}`)

console.log(`pessoa 3: idade atual ${calculo3}`)
console.log(`sua idade em 2029 sera de ${idade3em2029}`)

console.log(`pessoa 4: idade atual ${calculo4}`)
console.log(`sua idade em 2029 sera de ${idade4em2029}`)

console.log(`pessoa 5: idade atual ${calculo5}`)
console.log(`sua idade em 2029 sera de ${idade5em2029}`)