var numero = prompt("numero");


while (numero<=0) {
    numero = prompt("numero");
}

function esEntero (numero) {
    var entero = false;
    if (numero == parseInt(numero)) {
        entero = true;
    }
    return entero;
}

function sumatorio (numero) {
    var contador = numero;
    var resultado = 0;
    while (contador > 0) {
        resultado+= contador;
        contador--;
    }
    return resultado;
}