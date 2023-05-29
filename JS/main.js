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
    if(numeromultiplicar > 0){
        for (i = 1; i <= 10; i++) {
            document.write(`${numeromultiplicar} * ${i} = ${numeromultiplicar * i} <br>`);
        }   
    }else{
        alert("Escriba numeros mayores a cero")
    }
}
 TablasdeMultiplicar(-1); //descomentar para probar
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
// Divisores(100); //descomentar para probar

//----------------------------Ejericicio que genere numeros aeleatorios
const matriz = [];
// let totaldNumero = parseInt(prompt("Escribe de cuanto quieres que sea la longitud de los numeros, es decir cuantos se guardaran en el arreglo"))
// Generar 20 números aleatorios y guardarlos en la matriz
for (let i = 0; i < totaldNumero; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 100); // Generar número aleatorio entre 0 y 99
  matriz.push(numeroAleatorio); // Agregar número aleatorio a la matriz
}
// document.write(matriz); //descomentar para probar

//--------------------------------------------Ejercicio de pasar lo que el usuario ingrese en un array
// Obtener el string ingresado por el usuario en un popup
const input = prompt('Ingresa varias palabras separadas por comas:');
// Dividir el string en un array utilizando la coma como separador
const array = input.split(',');
// Eliminar los espacios en blanco alrededor de cada palabra
const trimmedArray = array.map(word => word.trim());
// Convertir los elementos del array a números (opcional)
const numberArray = trimmedArray.map(word => Number(word));

// document.write(numberArray); // Salida: [1, 2, 3, 4, 5]
