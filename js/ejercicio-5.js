class Persona{
    #nombre
    #edad
    #dni
    #sexo
    _altura
    _peso
    #anioNaciomiento
    constructor(nombre, edad, dni, sexo, altura, peso, anionacimiento){
        this.#nombre = nombre
        this.#edad = edad
        this.#dni = dni
        this.#sexo = sexo
        this._altura = altura
        this._peso = peso
        this.#anioNaciomiento = anionacimiento
    }
    get nombre(){
        return this.#nombre
    }
    set nombre(nuevoNombre){
        if(nuevoNombre.length > 0){
            this.#nombre = nuevoNombre
        }
    }
    get edad(){
        return this.#edad
    }
    set edad(nuevaEdad){
        if(nuevaEdad > 0 && !isNaN(nuevaEdad)){
            this.#edad = nuevaEdad
        }
    }
    get dni(){
        return this.#dni
    }
    set dni(nuevoDni){
        if(nuevoDni > 0 && !isNaN(nuevoDni)){
            this.#dni = nuevoDni
        }
    }
    get sexo(){
        return this.#sexo
    }
    set sexo(nuevoSexo){
        if(nuevoSexo === "H" && nuevoSexo === "M"){
            this.#sexo = nuevoSexo
        }
    }
    get peso(){
        return this._peso
    }
    set sexo(nuevoPeso){
        if(nuevoPeso > 0){
            this._peso = nuevoPeso
        }
    }
    get altura(){
        return this._altura
    }
    set altura(nuevaAltura){
        if(nuevaAltura > 0){
            this._altura = nuevaAltura
        }
    }
    get anionacimiento(){
        return this.#anioNaciomiento
    }
    set anionacimiento(nuevoAnioNacimiento){
        if(nuevoAnioNacimiento > 0){
            this.#anioNaciomiento = nuevoAnioNacimiento
        }
    }
    mostrarGeneracion(){
        if(this.anionacimiento >= 1994 && this.anionacimiento <= 2010){
            return `${this.nombre} pertenece a la generacion Z, cuyo rasgo es la irreverencia`
        }
        else if(this.anionacimiento >= 1981 && this.anionacimiento <= 1993){
            return `${this.nombre} pertenece a la generacion Y, cuyo rasgo es la frustación`
        }
        else if(this.anionacimiento >= 1969 && this.anionacimiento <= 1980){
            return `${this.nombre} pertenece a la generacion X, cuyo rasgo es la obsesión con el éxito`
        }
        else if(this.anionacimiento >= 1949 && this.anionacimiento <= 1968){
            return `${this.nombre} pertenece a la generacion Baby Bloom, cuyo rasgo es la ambición`
        }
        else if(this.anionacimiento >= 1930 && this.anionacimiento <= 1948){
            return `${this.nombre} pertenece a la generacion Silent Generation, cuyo rasgo es la austeridad`
        }
    }
    esMayorDeEdad(){
        return this.edad >= 18 ? `${this.nombre} es mayor de edad` : `${this.nombre} es menor de edad`
    }
    mostrarDatos(){
        document.writeln('<ul>')
        document.writeln(`<li>Nombre: ${this.nombre}</li>`)
        document.writeln(`<li>Edad: ${this.edad}</li>`)
        document.writeln(`<li>Dni: ${this.dni}</li>`)
        document.writeln(`<li>Sexo: ${this.sexo === "H" ? "Hombre" : "Mujer"}</li>`)
        document.writeln(`<li>Peso: ${this.peso}</li>`)
        document.writeln(`<li>Altura: ${this.altura}</li>`)
        document.writeln(`<li>Anio nacimiento: ${this.anionacimiento}</li>`)
        document.writeln('</ul>')
    }
    generarDni(){
        let dniAleatorio = ""
        for(let i=0; i < 8; i++){
            let numeroAleatorio = Math.floor(Math.random() *10)
            dniAleatorio += numeroAleatorio.toString()
        }
        this.dni = dniAleatorio
    }
}
let persona1 = new Persona("Fabian", 19, "38921674", "H", 70, 1.70, 1999)
document.writeln('<h5>Uso el metodo mostrarDatos()</h5>')
persona1.mostrarDatos()
document.writeln('<h5>Uso el metodo mostrarGeneracion()</h5>')
document.writeln(`${persona1.mostrarGeneracion()}`)
document.writeln('<h5>Uso el metodo esMayorDeEdad()</h5>')
document.writeln(`${persona1.esMayorDeEdad()} <br>`)
document.writeln('<h5>Uso el metodo generarDni(), para generar un dni aleatorio</h5>')
persona1.generarDni()
persona1.mostrarDatos()