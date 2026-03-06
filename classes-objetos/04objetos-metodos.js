// Método é uma função dentro de um objt
const senai = {
    codigo: 603,
    cidade: 'Araraquara',
   


    descreverEscola() {
        // A palavra reservada thie refere ao objt no contexto atual
        // Usado para acessar propriedades e métodos do objt corrente
        console.log(`O código ${senai.cidade} pertence a Escola SENAI de ${this.cidade}`)
    }
};



senai.codigo = 608;
senai.cidade = 'Matão'
senai.descreverEscola()
