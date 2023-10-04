var a = prompt("PRIMER NUMERO");
a = parseInt(a);
while (!(a%1 == 0) || (a<0)) {
   a = prompt("PRIMER NUMERO");
}

var b = prompt("SEGUNDO NUMERO");
b = parseInt(b);
while (!(b%1 == 0) || (b<0)) {
    b = prompt("SEGUNDO NUMERO");
}

var c = prompt("TERCER NUMERO");
c = parseInt(c);
while (!(c%1 == 0) || (c<0)) {
    c = prompt("TERCER NUMERO");
}

var d = prompt("CUARTO NUMERO");
d = parseInt(d);
while (!(d%1 == 0) || (d<0)) {
    d = prompt("CUARTO NUMERO");
}

function orden (a, b, c, d) {
    var ordenCorrecto = false;
    if (a<b && b<c && c<d) {
        ordenCorrecto = true;
    }
    return ordenCorrecto;
}
console.log(orden(a, b, c, d));
