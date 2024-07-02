//Tratando erros
function Calcular(valor) {
    if (valor === 0) {
        throw new Error('Não pode ser 0!')
    }
    return valor / 2;
}

try {
    const resultado = Calcular(0);
    console.log('Resultado:', resultado);
} catch (error) {
    console.log(error.message); 
} finally {
    console.log('Chegou no finally')
}