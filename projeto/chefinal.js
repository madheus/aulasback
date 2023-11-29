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
    inventario(){
        let mochila = []
        console.log('')
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
        procurar itens:
        inventario
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
        sair;
         `)
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
    if(escolha1=='procurar'){
        let sorte= (Math.random() * 20)
        if(sorte>11){
                console.log(`voce achou um item
                detalhe: este item é aleatorio ent tera que ver seu inventario`)
            if(sorte==12){
                mochila.push('Espada comum, seu valor de venda é de 10 moedas')
            }if(sorte==13){
                mochila.push('Escudo comum, seu valor de venda é de 12 moedas')
            }if(sorte==14){
                mochila.push('Espada incomum, seu valor de venda é de 15 moedas')
            }if(sorte==15){
                mochila.push('Escudo incomum, seu valor de venda é de 17 moedas')
            }if(sorte==16){
                mochila.push('Espada rara, seu valor de venda é de 25 moedas')
            }if(sorte==17){
                mochila.push('Escudo raro, seu valor de venda é de 27 moedas')
            }if(sorte==18){
                mochila.push('Espada epica, seu valor de venda é de 50 moedas')
            }if(sorte==19){
                mochila.push('Escudo epico, seu valor de venda é de 60 moedas')
            }
        }
        if(sorte<=10){
            console.log('voce se empenhou na procura, porem não achou nada, tente uma proxima vez')
        }

    }
    if(escolha1=='inventario'){
        Array.mochila.letgh
    }
}