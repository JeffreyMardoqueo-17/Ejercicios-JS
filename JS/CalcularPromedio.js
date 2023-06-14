const CalcularPromedio = (Nota1, Nota2, Nota3, Nota4)=>{
    let nota1 = parseFloat(Nota1);
    let nota2 = parseFloat(Nota2);
    let nota3 = parseFloat(Nota3);
    let nota4 = parseFloat(Nota4);
    let promdio = (nota1 + nota2 + nota3 + nota4)/4;
    if(promdio <= 10 && promdio>8){
        alert("Excelente")
    }else if(promdio <= 8 && promdio >=7){
        alert("Muy bueno")
    }else if(promdio > 0 && promdio <=6){
        alert("Debe mejorar")
    }
    document.write(`Tus notas son de: ${nota1}, ${nota2}, ${nota3}, ${nota4} que dan un promedio de: ${promdio}`)
}
CalcularPromedio(9,7,8.5,6.5);