//Trabalhando com Object.defineProperty e Object.defineProperties

const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: false, //se estiver true => usuario.nome = 'novo nome'
    configurable: false, //se estiver true => posso deletar o nome
    enumerable: true, //se estiver true => será exibido no objeto
})

class Usuario {
    
    constructor(email, senha, nome) {
        Object.defineProperties(this, {
            nome: propriedadePadrao(nome),
            email: propriedadePadrao(email),
            senha: propriedadePadrao(senha),
        })
    }
}

const usuario = new Usuario('emails', 'senhas', 'nomes');

console.log(usuario);