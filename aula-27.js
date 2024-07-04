//Trabalhando com array usando .filter

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

const filtrarPessoa = (pessoa) => pessoa.idade > 30;

const listaFiltrada = lista.filter(filtrarPessoa);

console.log(lista);

console.log(listaFiltrada);