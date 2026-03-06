// Classe é uma definição. Como um objeto deve ser.
class Senai {
    codigo;
    cidade;

    //Dentro de uma classe não precisa da palavra function

    descreverEscola(){
        console.log(`O código ${this.codigo} pertence a escola SENAI de ${this.cidade}`)
    }
}

// instância é uma ocorrência. Criação de um novo objt
// Criando uma instância (uma nova escola)

const senaiArqa = new Senai();
// Incrementando o objeto
senaiArqa.codigo = 603;
senaiArqa.cidade = 'Araraquara';

const senaiMat = new Senai();
// Incrementando o objeto
senaiMat.codigo = 145;
senaiMat.cidade = 'Matão';
senaiMat.rua = 'Ilha das Flores'

// Exibindo os dados no console
senaiArqa.descreverEscola();
senaiMat.descreverEscola();