//Trabalhando com array usando .map

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
//Uma maneira de usar a função map
const converterObjeto = (objeto) => {
    return{
        ...objeto,
        nomeIdade: `Nome: ${objeto.nome}, Idade: ${objeto.idade}`,
    }     
}
console.log(lista.map(converterObjeto));

//Outra maneira de usar a função map
console.log(lista.map((objeto) => objeto.idade));