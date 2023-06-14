class Aplicacion{
    constructo(pNombre, pPeso, pCalificacion, pDescripcion){
        this.Nombre = pNombre;
        this.pPeso = pPeso;
        this.Calificacion = pCalificacion;
        this.Descripcion = pDescripcion;
        this.Instalada = false;
        this.Abierta = false;
    }
    intalar(){
        if(this.Instalada == false){
            alert("Aplicacion instalandose")
            this.Instalada = true;
        }else if(this.Instalada == true){
            alert("Aplicacion instalada");
        }
    }
    abrir(){
        if(this.Instalada == false){
            this.Abierta = true;
            alert("La aplicacion se abrio");
        }else{
            alert("La aplicacion esta abierta")
        }
    }
    CerrarAplicacion(){
        (this.Abierta == true) ? alert("Cerrando aplicacion"): alert("La aplicacion esta cerrada");
    }
}