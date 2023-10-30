// Definindo a classe Personagem
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

// Definindo a classe Guerreiro que herda de Personagem
class Guerreiro extends Personagem {
    constructor() {
        super(100, 10); // Saúde inicial e força do guerreiro
    }
    curar() {
        const cura = 20; 
        this.saude += cura;
        console.log(`Guerreiro se curou e recuperou ${cura} de saúde!`);
    }
}

// Definindo a classe Monstro que herda de Personagem
class Monstro extends Personagem {
    constructor() {
        super(50, 8); // Saúde inicial e força do monstro
    }
}

// Exemplo de uso
let guerreiro = new Guerreiro();
let monstro = new Monstro();

console.log(guerreiro.atacar(monstro)); // Saída: Guerreiro causou 10 de dano!
console.log(monstro.atacar(guerreiro)); // Saída: Monstro causou 8 de dano!
console.log("Saúde do Guerreiro: " + guerreiro.saude); // Saída: Saúde do Guerreiro: 92
console.log("Saúde do Monstro: " + monstro.saude); // Saída: Saúde do Monstro: 40
