//Declarar objetos {}

const cleber = {
    idade: 42,
    peso: 90,
    nome: 'Cleber',
    genero: 'Masculino',
    nacionalidade: 'Brasileiro',
    endereco: 'Rua Delly Augusto Soares',
    numero: 1949,
    pais: 'Brasil',
    temFilhos: true,
}

const exibirInformacoes = (pessoa) => {
    console.log(`Peso do ${pessoa.nome}:`, pessoa.peso);
    console.log(`Idade do ${pessoa.nome}:`, pessoa.idade);
    console.log(`Endereço do ${pessoa.nome}:`, pessoa.endereco);
}

exibirInformacoes(cleber)