class Contacto{
    #nombre;
    #telefono;
    constructor(nombre, telefono){
        this.#nombre = nombre
        this.#telefono = telefono
    }
    get nombre(){
        return this.#nombre
    }
    set nombre(nuevoNombre){
        if(nuevoNombre.length > 0){
            return this.#nombre = nuevoNombre
        }
    }
}
class Agenda{
    #cantidadContactos;
    #listaContactos;
    constructor(cantidadcontactos = 10){
        this.#cantidadContactos = cantidadcontactos
        this.#listaContactos = listaContactos 
    }
    get cantidadContactos(){
        return this.#cantidadContactos
    }
    set cantidadContactos(nuevaCantidadcontactos){
        if(nuevaCantidadcontactos.length > 0){
            return this.#cantidadContactos = nuevaCantidadcontactos
        }
    }
    get listaContactos(){
        return this.#listaContactos
    }
    set listaContactos(nuevaListaContactos){
        if(nuevaListaContactos.length > 0){
            return this.#listaContactos = nuevaListaContactos
        }
    }
    aniadirContacto(objetoContacto){
        if(objetoContacto.length >= this.cantidadContactos){
            return "La agenda esta llena no se puede agregar el contacto"
        }
        else{
            this.listaContactos(contacto =>{
                this.listaContactos.push(objetoContacto)
                alert(`El contacto ${contacto.nombre} ha sido agregado a la agenda`)
            })
        }
    }
    existeContacto(objetoContacto){
        let encontrado = this.listaContactos.find(contacto => contacto.nombre === objetoContacto.nombre)
        if(encontrado){
            return `El contacto ${encontrado.nombre} existe en la lista`
        }
        else{
            return `El contacto ${encontrado.nombre} no existe en la lista`
        }
    }
    listarContactos(){
        document.writeln("<ul>")        
        this.listaContactos.forEach(contacto => document.writeln(`<li>Nombre ${contacto.nombre} - Teléfono ${contacto.telefono}</li>`))
        document.writeln("</ul>")        
    }
    buscarContactos(nombre){
        let encontrado = this.listaContactos.find(contacto => contacto.nombre === nombre)
        if(encontrado){
            return `El contacto con nombre ${nombre} tiene un telefono ${encontrado.telefono}`
        }
        else{
            return `No se encontro ningun contacto con el nombre ${nombre}`
        }
    }
    eliminarContacto(){
        //elimina el contacto de la agenda, indica si se a eliminado o no por pantalla
    }
    agendaLlena(){
        if(this.listaContactos.length >= this.cantidadContactos){
            return "La agenda esta llena"
        }
        else{
            "La ganda tiene lugares disponibles"
        }
    }
    huecosLibres(){
        let cantidadHuecos = this.listaContactos.length - this.cantidadContactos
        return `La agenda tiene ${cantidadHuecos} espacios libres`
    }
}
function menu(){
    let cantidadContactos = parseInt(prompt("Ingrese la cantidad de contactos"))
    let agenda1 = new Agenda(cantidadContactos);
    let opcion;
    let condicion = true
    do{
        opcion = parseInt(prompt(`Seleccione una opción:
      1. Agregar contacto
      2. Buscar contacto
      3. Eliminar contacto
      4. Mostrar lista de contactos
      5. Mostrar el estado de la agenda
      6. Ver cuantos lugares quedan disponible en la agenda
      7. Ver si un contacto ya existe
      8. Salir`))
      switch(opcion){
        case 1:
            const nombre = prompt("Ingrese el nombre del contacto")
            const telefono = parseInt(prompt("Ingrese el telefono del contacto"))
            const contacto = new Contacto(nombre, telefono)
            agenda1.aniadirContacto(contacto)
            break;
        case 2:
            const nombreBuscado = prompt("Ingrese el nombre del contacto a buscar")
            document.writeln(`${agenda1.buscarContactos(nombreBuscado)}`)
            break;
        case 3:
            const nombreEliminar = prompt("Ingrese el nombre del contacto a eliminar")
            const contactoEliminar = new Contacto(nombreEliminar)
            agenda1.eliminarContacto(contactoEliminar)    
            break;
        case 4:
            alert("Usted seleccionó mostrar la lista de los contactos")
            agenda1.listarContactos()
            break;
        case 5:
            agendaLlena
            break;
        case 6:
            alert("Usted eligió ver cuantos huecos quedan libres en la agenda")
            alert(agenda1.huecosLibres())
            condicion = false
            break;
        case 7:
            alert("Usted eligió ver si un contacto existe en la agenda")
            let contactoExiste = prompt("Ingrese el nombre del contacto para ver si existe en la agenda")
            alert(agenda1.existeContacto(contactoExiste))
            break;
        case 8:
            alert("Usted salió del menú")
            condicion = false
            break;
      }
    }while(condicion || confirm("Desea continuar realizando operaciones en la agenda?"))
}
menu()
