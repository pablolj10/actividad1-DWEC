var nombres = ["candela", "lucas", "ana", "lorena", "josefa"];
var contraseñas = [0, 1, 2, 3, 4];
var nombre = "";
var contraseña = -1;
var intentos = 0;
var ncorrecto = false;
var ccorrecto = false;

while((!ncorrecto || !ccorrecto) && (intentos<5)) {
    ncorrecto = false;
    ccorrecto = false;
    nombre = prompt("NOMBRE DE USUARIO");
    contraseña = prompt("CONTRASEÑA");
    contraseña = parseInt(contraseña);
    for (var i=0 ; i<nombres.length ; i++) {
        if(nombre == nombres[i]) {
            ncorrecto = true;
            if(contraseña == contraseñas[i]) {
                ccorrecto = true;
            }
        }
    }
    if(ncorrecto && ccorrecto) {
        window.alert("EL NOMBRE DE USUARIO Y LA CONTRASEÑA SON CORRECTAS");        
    }
    if(!ncorrecto) {
        window.alert("EL NOMBRE DE USUARIO NO EXISTE");
    }
    if(ncorrecto && !ccorrecto) {
        window.alert("EL NOMBRE DE USUARIO NO COINCIDE CON LA CONTRASEÑA");
    }
    intentos++;
}
