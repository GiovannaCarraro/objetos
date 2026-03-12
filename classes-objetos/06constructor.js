class Senai{
    constructor(codigo, cidade) {
        this.codigo = codigo;
        this.cidade =  cidade;
    }


    dadosEscola() {
        console.log(`unidade: ${this.cidade} | Codigo interno: ${this.codigo}` )
    }
}

const escolaA = new Senai(603, 'Araraquara');
const escolaB = new Senai(145, 'São Carlos');
const escolaC = new Senai(545, 'Americo Brasiliense');

escolaA.dadosEscola();
escolaB.dadosEscola();
escolaC.dadosEscola();