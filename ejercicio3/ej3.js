var x = prompt("NUMERO");
x = parseInt(x);

function div2 (x) {
    var texto = "";
    if (x%2 == 0) {
        texto = "ES DIVISIBLE ENTRE DOS";
    }
    else {
        texto = "NO ES DIVISIBLE ENTRE DOS";
    }
    return texto;
}

function div3 (x) {
    var texto = "";
    if (x%3 == 0) {
        texto = "ES DIVISIBLE ENTRE TRES";
    }
    else {
        texto = "NO ES DIVISIBLE ENTRE TRES";
    }
    return texto;
}

function div5 (x) {
    var texto = "";
    if (x%5 == 0) {
        texto = "ES DIVISIBLE ENTRE CINCO";
    }
    else {
        texto = "NO ES DIVISIBLE ENTRE CINCO";
    }
    return texto;
}

function div10 (x) {
    var texto = "";
    if (x%10 == 0) {
        texto = "ES DIVISIBLE ENTRE DIEZ";
    }
    else {
        texto = "NO ES DIVISIBLE ENTRE DIEZ";
    }
    return texto;
}


console.log(div2(x));
console.log(div3(x));
console.log(div5(x));
console.log(div10(x));