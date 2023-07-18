function generarNumerosAleatorios(cantidad) {
  var numerosAleatorios = [];
  
  for (var i = 0; i <= cantidad; i++) {
    var numero = Math.random();
    numerosAleatorios.push(numero);
  }
  
  return numerosAleatorios;
}

// Ejemplo de uso:
var cantidadNumeros = prompt("Ingrese la cantidad de números aleatorios que desea generar:");
var numerosAleatoriosGenerados = generarNumerosAleatorios(parseInt(cantidadNumeros));
console.log(numerosAleatoriosGenerados);