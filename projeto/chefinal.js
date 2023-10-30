const rl = require('readline-sync')

class Personagem {
    constructor(saude, forca) {
        this.saude = saude;
        this.forca = forca;
    }

    atacar(alvo) {
        
        const dano = this.forca;
        alvo.receberDano(dano);
        return `${this.constructor.name} causou ${dano} de dano!`;
    }

    receberDano(dano) {
        this.saude -= dano;
        if (this.saude <= 0) {
            console.log(`${this.constructor.name} foi derrotado!`);
        }
    }
}

class Guerreiro extends Personagem {
    constructor() {
        super(100, 10);
    }
    curar() {
        const cura = 20;
        this.saude += cura;
        console.log(`Guerreiro se curou e recuperou ${cura} de saúde!`);
    }
}

class Monstro extends Personagem {
    constructor() {
        super(50, 8);
    }
}

let guerreiro = new Guerreiro();
let monstro = new Monstro();



console.log('Bem Vindo Jogador')
console.log('')

console.log('Vamos a sua classe agora, parabens voce é;')
console.log('Guerreiro: utiliza uma arma de uma mão com escudo')


while (true) {
    console.log(`opcoes do que fazer;
        explorar;
        taberna;
        sair do jogo(digite: sair);

    `)
    let escolha1 = rl.question('Digite uma das opocoes acima: ')
    if (escolha1 == 'explorar') {
        let sorte = (Math.random() * 21)

        if (sorte >= 20) {
            console.log('voce teve uma exploração tranquila e pacifica')
        }

        if (sorte <= 19) {
            console.log('voce achou um monstro, boa sorte')
            while (guerreiro.saude > 0 && monstro.saude > 0) {

                let escolha2 = rl.question(`o que fazer:
                    fugir;
                    atacar;
                    curar;

                    `)
                if (escolha2 == 'fugir') {
                    console.log('voce fugiu, medroso')
                    break
                }
                if (escolha2 == 'atacar') {
                    console.log(guerreiro.atacar(monstro));
                    console.log(monstro.atacar(guerreiro));
                    console.log("Saúde do Guerreiro: " + guerreiro.saude);
                    console.log("Saúde do Monstro: " + monstro.saude);
                }
                if (escolha2 == 'curar') {
                    guerreiro.curar()
                    console.log(`Guerreiro se curou e recuperou ${guerreiro.saude} de saúde!`)
                }
            }
        }
    }
    if (escolha1 == 'taberna') {
        console.log('voce decediu ir a taberna')
        console.log(`o que fazer:
        beber;
        hospedagem;
        sair; `)
        let escolha2 = rl.question('voce deseja fazer:  ')

        if (escolha2 == 'beber') {
            console.log('Voce não tem dinheiro')
        }
        if (escolha2 == 'hospedagem') {
            console.log('Voce nao tem dinheiro')
        }
        if (escolha2 == 'sair') {
            console.log('isso voce pode fazer')
        }
    }
    if (escolha1 == 'sair') {
        console.log('obrigado por jogar')
        break
    }
}