let Tonto = {
    nombre: `Jeffrey`,
    apellido: `JJ`,
    edad: `17 años`,
    pasatiempos: [
        'Leer',
        'Caminar', 
        'dibujar',
        'cantar', 
        'Practicar programacion',
        'escibir mi linda historia'
    ],
    novia: false,
    enamorado: true,
    amigos:[`Wilber`, `sin descripcion`]
}
// console.log(Tonto)
Tonto.edad <= 18 ? console.log("Si puedes pasar") : console.log("Nop no puede"); //Usando el operador ternario

// console.log(JSON.stringify(Tonto));

let MiCarro = {
    marca : 'Toyota',
    llantas: '4',
    contravando: true,
    numeroPlazas: 5,
	tipo: 'deportivo',
	precio: 1000000,
}
// console.log(`El vehiculo de la marca ${MiCarro.marca}, que es de tipo ${MiCarro.tipo}, tiene un precio de $${MiCarro.precio}`);
const ConvertirJSON = (aConvertir)=> console.log(JSON.stringify(aConvertir));
ConvertirJSON(MiCarro)
let palabra = "Todo bonito".charAt(1);
