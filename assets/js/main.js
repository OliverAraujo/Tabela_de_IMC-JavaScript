// capturando o submit do formulario 
const form = document.querySelector('#formulario');

// adicionando um evento ao formulário, que é o evento de submit 
form.addEventListener('submit', function (e) {
    // previnindo o envio do formulário
    e.preventDefault();
    // capturando os dados do input
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    // convertendo os inputs para number
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    // caso retorne NaN, fazer o check
    if (!peso) {
        setResultado('Peso Inválido', false);
        return;
    }

    if(!altura) {
        setResultado('Altura Inválida', false);
        return;
    }

    // Calculando o IMC, criando uma função para realizar o calculo
    const imc = getImc(peso, altura);

    // pegando os niveis do IMC, que é o texto em array
    const nivelImc = getNivelImc(imc);

    // mensagem final com os valores
    const msg = `Seu IMC é ${imc} (${nivelImc}.)`;

    // setando o resultado
    setResultado(msg, true);
    // continua o codigo...
});

// função com os niveis, usando um array com uma lista de strings
function getNivelImc (imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
        'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    // parte lógica feita com a checagem de tras para frente, a medida que a função encontrar a palavra return, não vai ser mais executada.
    if (imc >= 39.9) return nivel[5];
    if (imc >= 34.9) return nivel[4];
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];
    if (imc >= 18.9) return nivel[1];
    if (imc < 18.5) return nivel[0];
}

// função lógica que calcula o IMC
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// função que cria paragrafo
function criaP () {
    const p = document.createElement ('p');
    return p;
}

// função que seta o resultado, recebe uma mensagem se o resultado é válido
function setResultado(msg, isValid) {
    const resultado = document.querySelector('#resultado');
    // zera o html daquele resultado
    resultado.innerHTML = '';

    // cria um novo paragrafo
    const p = criaP();

    // faz a checkagem para verificar se é verdadeira 
    if (isValid) {
        p.classList.add('paragrafo-resultado'); //fundo verde
    } else {
        p.classList.add('bad'); // fundo vermelho
    };

    // setando o paragrafo no resultado
    p.innerHTML = msg;
    resultado.appendChild(p);

}