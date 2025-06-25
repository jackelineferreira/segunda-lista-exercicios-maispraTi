//Questão 43:

function combinarObjetos(obj1, obj2) {
 
    return { ...obj1, ...obj2 };
}

const obj1 = {
    nome: 'Carlos',
    idade: 25,
    cidade: 'São Paulo'
};

const obj2 = {
    idade: 30,  
    estadoCivil: 'Solteiro'
};

const combinado = combinarObjetos(obj1, obj2);

console.log('Objeto combinado:', combinado);