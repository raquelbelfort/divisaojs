let numerador = prompt("Por favor, digite o numerador: ");
let denominador = prompt("Por favor, digite o denominador: ");
let result;

if (denominador == 0) {
    alert ("Não é possível dividir um número por zero.");
}

else {
    result = numerador / denominador;
    alert(`${numerador} dividido por ${denominador} é igual a ${result}. Obrigada!`);
}