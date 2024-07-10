//Criando classe
class Pessoa {
    nome;
    idade;
    filhos;

    //Função contar filhos
    quantosFilhos() {
        if(this.filhos) {
            return this.filhos.length;
        }
        return 0;
    }
    //Construtor para retornar valores da classe
    constructor(nome, idade, filhos) {
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos;
    }
}

const filho1 = new Pessoa('Bento', 6);

const filho2 = new Pessoa('Clara', 0)

const pessoa = new Pessoa('Cleber', 42, [filho1, filho2]);

console.log(pessoa);

console.log('Quantidade de filhos: ', pessoa.quantosFilhos())