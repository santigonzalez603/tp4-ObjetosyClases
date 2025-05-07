class Aeropuerto{
    constructor(nombreAeropuerto){
        this._aeropuerto = nombreAeropuerto
        this._listaAviones = []
    }
    get nombreAeropuerto(){
        return this._aeropuerto
    }
    set nombreAeropuerto(nuevoNombreAeropuerto){
        if(nuevoNombreAeropuerto.length > 0){
            return this._aeropuerto = nuevoNombreAeropuerto
        }
    }
    get listaAviones(){
        return this._listaAviones
    }
    set listaAviones(nuevaListaAviones){
        if(nuevaListaAviones.length > 0){
            return this._listaAviones = nuevaListaAviones
        }
    }
    agregarAviones(objetoAvion){
        alert(`Se ha agregado el avion ${objetoAvion.nombre}`)
        this.listaAviones.push(objetoAvion)
    }
    buscarAviones(nombreAvion){
        let avionesEncontrados = this.listaAviones(avion=> avion.nombre === nombreAvion)
        if(avionesEncontrados.length > 0){
            let datosAviones = avionesEncontrados.map(avion=> `El avion ${avion.nombre} tiene una capacidad para ${avion.capacidad} pasajero y tiene destino ${avion.destino}`)
            return datosAviones
        }
        else{
            return "No se ha encontrado el avion buscado"
        }
    }
    mostrarListaAviones(){
        document.writeln("<ul>")  
        this.listaAviones.forEach(avion=> document.writeln(`<li>El avion ${avion.nombre} tiene una capacidad para ${avion.capacidad} pasajero y tiene destino ${avion.destino}</li>`))     
        document.writeln("</ul>")
    }
}
class Avion{
    #listaPasajeros
    constructor(nombre, capacidad, destino, listaPasajeros){
        this.nombre = nombre
        this.capacidad = capacidad
        this.destino = destino
        this.#listaPasajeros = listaPasajeros
    }
    get listaPasajeros(){
        return this.#listaPasajeros
    }
    set listaPasajeros(nuevaListapasajeros){
        if(nuevaListapasajeros.length > 0){
            return this.#listaPasajeros = nuevaListapasajeros
        }
    }
    abordar(pasajeros){
        let capacidadDisponible = this.capacidad - this.listaPasajeros.length
        if(capacidadDisponible > 0){
            this.listaPasajeros.push(pasajeros)
            return `tiene capacidad disponible de ${pasajeros} pasajeros, se procede al albordaje del pasajero ${pasajeros.join(", ")}`
        }
        else{
            return `El avion ${this.nombre} se encuentra completo`
        }
    }
}
//Se creó una funcion para generar una lista con un numero aleatorio de pasajeros
function generarListaPasajeros(maximo){
    let numeroPasajero = Math.floor(Math.random() * maximo + 1)
    let listaPasajerosAleatoria = []
    for(let i=0; i <= numeroPasajero; i++){
        listaPasajerosAleatoria.push(`Pasajero${i}`)
    }
    return listaPasajerosAleatoria
}
let aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional")
//crear 3 objetos aviones con diferentes destinos
let avion1 = new Avion("Airbus A380", 525, "Miami", generarListaPasajeros(525))
let avion2 = new Avion("Embraer E190", 114, "Buenos Aires", generarListaPasajeros(500))
let avion3 = new Avion("Boeing-747", 366, "Estambul", generarListaPasajeros(366))
//agregar los 3 aviones al aereopuerto
document.writeln("<h5>Uso el método agregarAvion() en la clase Aeropuerto:</h5>")
aeropuertoInternacional.agregarAviones(avion1)
aeropuertoInternacional.agregarAviones(avion2)
aeropuertoInternacional.agregarAviones(avion3)
aeropuertoInternacional.mostrarListaAviones()
//buscar un avion
document.writeln("<h5>Uso el método buscarAviones() en la clase Aeropuerto:</h5>")
document.writeln("<ul>")
document.writeln(`<li class="list-group-item text-success">Se buscó el avion "Airbus A380": ${aeropuertoInternacional.buscarAviones("Airbus A380")}</li>`)
document.writeln(`<li class="list-group-item text-success">Se buscó el avion "Embraer E190": ${aeropuertoInternacional.buscarAviones("Embraer E190")}</li>`)
document.writeln(`<li class="list-group-item text-danger">Se buscó el avion "Boeing-737": ${aeropuertoInternacional.buscarAviones("Boeing-737")}</li>`)
document.writeln("</ul>")
document.writeln("<h5>Uso el metódo buscarAviones() en la clase aeropurerto</h5>")
document.writeln(`<h6 class="display-6">${avion2.abordar(["Pasajero Matias","Pasajero Ramon"])}</h6>`)
document.writeln(`<h6 class="display-6">${avion1.abordar(["Pasajero Matias","Pasajero Ramon"])}</h6>`)