//Strings

const mensagem = 'Olá minha gente';
const mensagem1 = 'tudo bem?';

//Contar caracteres
console.log('Tamanho: ',mensagem.length);
console.log('Tamanho: ', mensagem1.length);

//Juntar strings
console.log('Concat:', mensagem.concat(mensagem1));
console.log('Concat +:', mensagem + mensagem1);
console.log('Concat ES:', `${mensagem} ${mensagem1}`);
console.log('Maiuscula:', mensagem.toUpperCase());
console.log('Minuscula:', mensagem.toLowerCase());
console.log('Replace:', mensagem.replace('minha gente','pessoal'));


//Fatiar strings
console.log(mensagem.substring(5));
console.log(mensagem.substring(5, 2));
console.log('Quebrar em um array:', mensagem.split(' '));