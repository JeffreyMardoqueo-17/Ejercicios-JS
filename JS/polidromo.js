
const Polifromo = (palabra)=>{
    //se convierte el parametro (palabra) a minusculas y se elimina los espacios
    palabra = palabra.toLowerCase().replace(/\s/g, '');
  // Comparamos la palabra original con su versión al revés
    return palabra === palabra.split('').reverse().join('');
    //explicacion = 
    /** 
     * palabra.split(''): Este código convierte la palabra en una matriz de caracteres. Cada letra de la palabra se convierte en un elemento separado en el array.
    palabra.split('').reverse(): Luego, utilizamos el método reverse()en el array para invertir
    palabra.split('').reverse().join(''): Utilizamos el método join('')para convertir el array de caracteres invertidos nuevamente en una cadena. El argumento ' 'del método join()es una cadena vacía, lo que significa que no habrá ningún carácter separador entre los elementos del arreglo
    */
}
const palabra1 = "reconocer";
const palabra2 = "hola";

console.log(Polifromo(palabra1)); // Output: true
console.log(Polifromo(palabra2)); // Output: false
