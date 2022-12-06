// function sayMyName(name) {
//   console.log('your name is: ' + name);}

//sayMyName('Daisy');
//sayMyName('Gabriel'); 
//funções que não devolvem nada são só procedimentos, não tem retorno

function quadrado(valor) {
    return valor * valor;

}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

function incrementarJuros(valor, percentualJuros) {
   const valorDeAcrescimo = (percentualJuros / 100) + valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));


//funções: pequenos trechos de cód que podemos invocar pra ser executado.