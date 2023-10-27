const rl= require('readline-sync')
class Personagem {
    constructor() {
    this.nome = nome
    this.raca = raca 
    this.classe = classe
    }
    
}
let danaNoHeroi
class Heroi extends Personagem {
    constructor(nome, raca, classe, nivel, xp, hp, pontosAta) {
        this.nome = nome
        this.raca = raca 
        this.classe = classe
        this.nivel = 0
        this.xp = 0
        this.pontoVida = 150
        this.mp = 150
        this.pontosAtaque= 10 
        this.pontosDefesa= 5
        this.poderespecial = 'grito da alma'
    }
    
}
class Monstro extends Personagem {
    constructor(nome, raca, classe){
        this.nome = nome
        this.raca = raca
        this.classe = classe
        this.nivel = nivel
        this.hp = 75
        this.pontosAta= 7 
        this.pontosDef= 3
    }
}
class Lutem {
    constructor() {
        
    }
    
    
}


troll = new Monstro('troll', 'troll da floresta', 'besta', 1)
aranhaGigante = new Monstro('aranha gigante', 'não venenosa', 'animal', 0)
BandidoFraco= new Monstro('Humano', 'Humano bandido', 'criminoso', 2)

console.log('Bem Vindo Jogador')
console.log('')
let nome = rl.question('por fazor Digite seu nome/apelido: ')

console.log('Agora vamos escolher sua raca(elas não alteram as estastisticas ainda, nem aparencia pois não temos front ainda)')
let raca = rl.question('As opcoes são; Humano, elfo, anão, orc, lizardman: ')

console.log('Vamos as classes agora:')
console.log('Guerreiro: utiliza uma arma de uma mão com escudo')
console.log('Espadachim magico: Utiliza armas de uma mão com magias')
console.log('Barbaro: utiliza armas de duas mãos ou duas armas de uma mão')
console.log('Arqueiro: Utiliza arcos/opção de usar duas adagas juntas')
console.log('Mago:utiliza todas as magias disponiveis/Bonus de potencia em magias pois utiliza as duas mãos nelas')
let classe = rl.question('Digite sua classe escolhida: ')

if (classe=='Guerreiro') {
    console.log('Guerreiro: utiliza uma arma de uma mão com escudo')
}
if (classe=='Espadachim magico') {
    console.log('Espadachim magico: Utiliza armas de uma mão com magias')
}
if (classe=='Barbaro') {
    console.log('Barbaro: utiliza armas de duas maos ou duas armas de uma mão')
}
if (classe=='Arqueiro') {
    console.log('Arqueiro: Utiliza arcos/opçao de usar duas adagas juntas')
}
if (classe=='Mago') {
    console.log('Mago:utiliza todas as magias disponiveis/Bonus de potencia em magias pois utiliza as duas mãos nelas')
}
dragonBorn = new Heroi(nome, raca, classe,)


while(true) {
    console.log(`opões do que fazer;
        explorar;
        ver inventario;
        ver nivel;
        procurar monstros;
        procurar plantas raras
    `)
    let escolha1 = rl.question('Digite uma das opoções acima: ')
    if (escolha1=='explorar') {
        
    }
    if (escolha1=='ver inventario') {
        
    }
    if (escolha1=='ver nivel') {
        
    }
    if(escolha1=='procurar monstros') {

    }
    if(escolha1=='procurar plantas') {
        
    }
    else {
        console.log('opção invalida')
    }
}

