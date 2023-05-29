let palabras = ["Jeffrey", "jeff"];
function MayusculaoMinuscula(palabra) {
return document.write(/^[a-z]/.test(palabra));
}
// MayusculaoMinuscula(palabras[1]);
function esBisiesto(anio) {
return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0 ? true : false;
}
function esBisiesto1(anio){
    return(anio % 4 === 0 && anio % 100 !== 0 || anio % 400 === 0? true : false );
}

function TablasdeMultiplicar(){
    for (i = 1; i <= numeromultiplicar; i++) {
        document.write(`${numeromultiplicar} * ${i} = ${numeromultiplicar * i} <br>`);
    }
}
TablasdeMultiplicar();