// a arrow é mais concisa, utilizando => em vez da palavra 
// os parâmetros e o corpo da função são os mesmos 

// função de seta que soma dois números
const soma = (a, b) => a + b;

// função de seta que exibe uma saudação
const saudacao = nome => console.log(olá, ${nome}!);


// função de seta que calcula o quadrado de um número
const quadrado = x => x * x;

const areaQuadrado = lado => lado * lado 

// função de seta que verifica se o número é par
const ePar = num => num % 2 === 0;

// função de seta que exibe a data e hora atual
const exibirDataHora = () => {
    const data = new Date();
    console.log(data.toLocaleString());
}