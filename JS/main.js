//----------------------Ejercicio para saber si una palabra empieza con Mayuscula o no xd
let palabras = ["Jeffrey", "jeff"];
function MayusculaoMinuscula(palabra) {
return document.write(/^[A-Z]/.test(palabra));
}
// MayusculaoMinuscula(palabras[1]);//descomentar para probar

//----------------------Ejercicio para saber si un año es bisiesto o no
function esBisiesto(anio) {
return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0 ? true : false;
}
// document.write(esBisiesto(2000));//descomentar para probar
// document.write(esBisiesto(2001));//descomentar para probar
//----------------------Ejercicio para realizar las tablas de multiplicar
function TablasdeMultiplicar(numeromultiplicar){
    for (i = 1; i <= 10; i++) {
        document.write(`${numeromultiplicar} * ${i} = ${numeromultiplicar * i} <br>`);
    }
}
// TablasdeMultiplicar(2); //descomentar para probar
//----------------------------Ejericio para encontrar diisores de un numero
function Divisores(numero) {
let divisores = [];

for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
    divisores.push(i);
    }
}
return document.write(divisores);
}
Divisores(100);