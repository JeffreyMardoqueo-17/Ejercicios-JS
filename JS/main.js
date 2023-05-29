//----------------------Ejercicio para saber si una palabra empieza con Mayuscula o no xd
let palabras = ["Jeffrey", "jeff"];
function MayusculaoMinuscula(palabra) {
return document.write(/^[a-z]/.test(palabra));
}
MayusculaoMinuscula(palabras[1]);

//----------------------Ejercicio para saber si un año es bisiesto o no
function esBisiesto(anio) {
return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0 ? true : false;
}
document.write(esBisiesto(2000));
document.write(esBisiesto(2001));
//----------------------Ejercicio para realizar las tablas de multiplicar
function TablasdeMultiplicar(numeromultiplicar){
    for (i = 1; i <= 10; i++) {
        document.write(`${numeromultiplicar} * ${i} = ${numeromultiplicar * i} <br>`);
    }
}
TablasdeMultiplicar(2);