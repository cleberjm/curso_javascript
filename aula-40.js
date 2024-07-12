//Crie uma classe Produto que tenha as seguintes propriedades:
//nome, preco, descricao, codigo, quantidade_em_estoque.

class Produto {
    nome;
    preco;
    descricao;
    codigo;
    quantidade_em_estoque;

    //A classe deve ter métodos para alterar o preço do produto
    alteraPreco(novoPreco) {
        //Esses métodos devem garantir que o preço seja um número positivo
        if (novoPreco >= 0) {
            this.preco = novoPreco;        
        }
    }

    //Adicionar mais unidades do produto no estoque
    adicionarEstoque(quantidade) {
        this.quantidade_em_estoque += quantidade;
    }

    //remover unidades do produto do estoque
    removerEstoque(quantidade) {
        const novoEstoque = this.quantidade_em_estoque - quantidade;
        //a quantidade de unidades em estoque nunca seja negativa
        if(novoEstoque >= 0){
            this.quantidade_em_estoque -= novoEstoque;
        }
    }

    constructor(nome, descricao, codigo) {
        this.nome = nome;
        this.descricao = descricao;
        this.codigo = codigo;
        this.preco = 0;
        this.quantidade_em_estoque = 0;
    }

}

//crie uma classe Smartphone que herde de Produto e adicione as seguintes propriedades: 
//marca, modelo e sistema_operacional
class Smartphone extends Produto{
    marca;
    modelo;
    sistema_operacional;

    //A classe deve ter um método que retorne uma descrição completa do smartphone,
    //incluindo todas as suas propriedades
    descricao() {
        return `
            marca: ${this.marca} \n
            modelo: ${this.modelo} \n
            sistema operacional: ${this.sistema_operacional} \n
            nome: ${this.nome} \n
            preco: ${this.preco} \n
            descricao: ${this.descricao} \n
            codigo: ${this.descricao} \n{
            quantidade em estoque: ${this.quantidade_em_estoque} \n
        `
    }

    constructor(nome, descricao, codigo, marca, modelo, sistema_operacional){
        super(nome, descricao, codigo );
        this.marca = marca;
        this.modelo = modelo;
        this.sistema_operacional = sistema_operacional;
    }
}

//crie um objeto smartphone1 da classe Smartphone,
const smartphone1 = new Smartphone(
    'iPhone',
    'Celular iPhone SE',
    '2345',
    'Apple',
    'SE',
    'iOS 15',
);

//altere seu preço, adicione mais unidades no estoque e exiba sua descrição completa.
smartphone1.alteraPreco(1330.30);
smartphone1.adicionarEstoque(10);

console.log(smartphone1);