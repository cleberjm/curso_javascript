//Strings

const mensagem = 'Olá minha gente';
const mensagem1 = 'tudo bem?';

//Contar caracteres
console.log('Tamanho: ',mensagem.length);
console.log('Tamanho: ', mensagem1.length);

//Juntar strings
console.log(mensagem.concat(mensagem1));
console.log(mensagem + mensagem1);

//Fatiar strings
console.log(mensagem.substring(5));
console.log(mensagem.substring(5, 2));
console.log(mensagem.split('l'));