//Trabalhando com Get e Set

const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: false, //se estiver true => usuario.nome = 'novo nome'
    configurable: false, //se estiver true => posso deletar o nome
    enumerable: true, //se estiver true => será exibido no objeto
})

class Usuario {
    
    constructor(email, senha, nome) {
        Object.defineProperties(this, {
            nome: {
                get: () => nome,
                set: (value) => nome = value,
            },
            email: {
                get: () => email,
                set: (value) => email = value,
            }, 
            senha: {
                get: () => senha,
                set: (value) => {
                    if(value.length < 4) {
                        throw new TypeError('Necessário pelo menos 4 caracteres')
                    }
                    senha = value 
                }
            }
        })

    }
}

const usuario = new Usuario('emails', 'senhas', 'nomes');
usuario.senha = '123';

console.log(usuario.senha);