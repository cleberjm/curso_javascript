//Trabalhando com array usando .keys

const lista = [
    {
        nome: 'Clara',
        idade: 0,
    },
    {
        nome: 'Bento',
        idade: 6,
    },
    {
        nome: 'Lenise',
        idade: 36,
    },

    {
        nome: 'Cleber',
        idade: 42,
    },
    {
        nome: 'Thor',
        idade: 13,
    },
    {
        nome: 'Nicolau',
        idade: 6,
    },
]

const funcaoReduce = (acc, objeto) => {
    return {
        ...acc,
        [objeto.nome]: {
            idade: objeto.idade
        }
    }
}

const pessoas = lista.reduce(funcaoReduce, {})

const chaves = Object.keys(pessoas);

const listaDeVolta = chaves.map((chave) => ({
    nome: chave,
    idade: pessoas[chave].idade
}))

console.log(pessoas);
console.log(chaves);
console.log(listaDeVolta);