var x = prompt("PRIMER NUMERO");
x = parseInt(x);
var y = prompt("SEGUNDO NUMERO");
y = parseInt(y);
var o = prompt("OPERACION");

function calculadora(x, y, O) {
    var r = 0;
    if(o == "SUMA") {
        r = x + y;
    }
    if(o == "RESTA") {
        r = x - y;
    }
    if(o == "MULTIPLICAR") {
        r = x * y;
    }
    if(o == "DIVISION") {
        r = x/y;
    }
    return r;
}

while (o != "FIN") {
    console.log(calculadora(x, y, o));
    x = prompt("PRIMER NUMERO");
    x = parseInt(x);
    y = prompt("SEGUNDO NUMERO");
    y = parseInt(y);
    o = prompt("OPERACION");
}
