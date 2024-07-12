//Trabalhando com spreadoperator: ...

const qualquer = {
    abc: 'asdf',
    def: 'zxcv',
    ghi: 'qwer',
    uio: 'vbnm',
}

const novoQualquer = {
    //spread
    ...qualquer,
    final: 'FINAL',
}

const lista1 = [1,3,5,7,9,11];
const lista2 = [2,4,6,8,10,12];

const juntarListas = [
    ...lista1,
    ...lista2,
]

console.log(qualquer);
console.log(novoQualquer);
console.log(juntarListas);
