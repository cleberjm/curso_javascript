//Trabalhando com array usando .sort

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

//Ordenar por idade menor para maior
lista.sort((a,b) => {
    if (a.idade < b.idade) {
        return -1;
    }
    if (a.idade > b.idade){
        return 1;
    }
    return 0;
})

//Ordenar por ordem alfabética
lista.sort((a,b) => {
    if (a.nome.toUpperCase() < b.nome.toUpperCase()) {
        return -1;
    }
    if (a.nome.toUpperCase() > b.nome.toUpperCase()) { 
        return 1;
    }
    return 0;
})

console.log(lista);
console.log(lista);