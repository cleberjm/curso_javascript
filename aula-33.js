//Trabalhando com array usando .flatmap

const lista = [
    {
        nome: 'Clara',
        idade: 0,
        cartoes: ['1234', '4321'],
    },
    {
        nome: 'Bento',
        idade: 6,
        cartoes: ['5678', '8765'],
    },
    {
        nome: 'Lenise',
        idade: 36,
        cartoes: ['1357', '7531'],
    },

    {
        nome: 'Cleber',
        idade: 42,
        cartoes: ['2468', '8642'],
    },
    {
        nome: 'Thor',
        idade: 13,
        cartoes: ['1111', '2222'],
    },
    {
        nome: 'Nicolau',
        idade: 6,
        cartoes: ['3333', '4444'],
    },
]

const cartoes = lista.flatMap((cartao) => cartao.cartoes);

console.log(cartoes);