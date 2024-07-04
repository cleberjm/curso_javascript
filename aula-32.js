//Trabalhando com array usando .some e .every

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

//Pelo menos um valor da lista tem que ser true para passar
const resultadoSome = lista.some((objeto) => objeto.idade > 40);
//Todos os valores da lista tem que ser true para passar
const resultadoEvery = lista.every((objeto) => objeto.idade > 40);

console.log('resultado', resultadoSome)
console.log('resultado', resultadoEvery)