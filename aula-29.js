//Trabalhando com array usando .reduce

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

console.log(pessoas)