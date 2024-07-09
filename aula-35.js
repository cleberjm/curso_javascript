//Trabalhando com Herança

class Usuario {
    email;
    senha;
    nome;

    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}
//Herda todos os parâmetros da classe Usuario
class Administrador extends Usuario {
    permissoes;

    constructor(email, senha, nome, permissoes) {
        //Super roda o construtor da classe pai
        super(email, senha, nome);
        this.permissoes = permissoes;
    }
}

class Comprador extends Usuario{
    compras;

}

const admin = new Administrador('email@email.com', 'senha', 'Evair', [1,6]);

const comprador = new Comprador();
comprador.senha = 'nova senha';

console.log(admin);
console.log(comprador);
