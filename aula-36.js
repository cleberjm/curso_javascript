//Polimorfismo

class Usuario {
    email;
    senha;
    nome;

    validarSenha(email, senha) {
        return email + senha === this.nome;   
    }

    constructor(email, senha, nome) {
        this.email = email;
        this.senha = senha;
        this.nome = nome;
    }
}
//Herda todos os parâmetros da classe Usuario
class Administrador extends Usuario {
    permissoes;

    validarSenha(email, senha) {
        return email === this.email && senha === this.senha;   
    }

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
const usuario = new Usuario('email', 'senha', 'nome')

const comprador = new Comprador();
comprador.senha = 'nova senha';

console.log(usuario.validarSenha('email', 'senha'));
console.log(admin.validarSenha('email@email.com', 'senha'));