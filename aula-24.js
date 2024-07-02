process.stdin.setEncoding('utf8');

console.log('Digite um número: ');
const soma = (valor) => {
    if (valor < 0 || valor > 100) {
        throw new Error('Valor inválido, aplicação será encerrada.')
    } 
    if (valor === 0) {
        return 0;
    }
    return valor + soma(valor -1)
}

process.stdin.on('data', function(data) {
    try {
        console.log('Soma: ', soma(Number(data)))
    } catch (error) {
        console.log(error.message)
        process.stdin.pause()
    }
    
});


    