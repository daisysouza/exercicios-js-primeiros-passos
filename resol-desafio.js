/* Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis:

1- Preço do cobustível;
2- Gasto médio do combustível do carro por km;
3- Distância em km da viagem.

Imprimir no console o valor que será gasto de combustível para realizar essa viagem.

*/


const precoCombustivel = 5.79;
const kmPorLitros = 12;
const distanciaEmKm = 1580;

const litrosConsumidos = distanciaEmKm / kmPorLitros;
const valorGasto = litrosConsumidos * precoCombustivel;
console.log(valorGasto.toFixed(2));




