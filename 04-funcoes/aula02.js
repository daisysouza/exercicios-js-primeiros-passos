/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde 
    para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/


//Refatorar o cod anterior em funções (pequenos trechos de cod)

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}


function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
    
}

(function main() {
    const peso = 38;
    const altura = 1.48;
   
    
    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
    

})();
//crio uma função anonima e já executo (isolada)





//As funções em js são como se fossem objetos que a gente consegue manipular, se comportam igual qualquer valor(conseguimos invocar e passar como parâmetro de outra função).




//Math potencia ao quadrado da altura (2)
//pow metodo estático


