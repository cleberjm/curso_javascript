//Trabalhando com array usando .find

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

const buscarPessoa = (pessoa) => pessoa.idade > 30;

const novaPessoa = lista.find(buscarPessoa);

console.log(novaPessoa);