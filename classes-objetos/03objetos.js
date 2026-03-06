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

quadrado.cor = '#000'