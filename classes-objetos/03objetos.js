/* Declaração de um objeto. Chave: valor;

01- Criar um objt quadrado
02- Criar funções (métodos áreas e perimetro)
03- Entender o contexto this
04- Escrever de forma abreviada
05- Acessar os dados do objeto */

let quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado
    },
    perimetro: function(lado){
        return this.lados*4
    }
};

const quadrado2 = {
    lados: 4,
    area(lado) {
        return lado * lado
    },
    perimetro(lado) {
        return this.lados * lado
    }
};

/* 01 - Criar um objt senai
02 - Acessar os dados da chave
03 - incrementar dados/alterar o objeto
04 - Excluir um valor do objt */

const senai = {
    codigo: 603,
    cidade: 'Araraquara'
};

console.log('------------')


senai.telefone = 16997421672
senai.rua = 'Hugo Negrini';
delete senai.rua

senai.endereco = {
    rua: 'Hugo Negrini', bairro: 'Quitandinha', numero: 60}

senai.alunos = ['SESI', 'EEBA', 'comunidade']

senai.endereco.numero = 62;

senai.alunos[2] = 'tecnico';

console.log(senai)