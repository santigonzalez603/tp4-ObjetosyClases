class Persona{
    #nombre
    #edad
    constructor(nombre, edad, profesion){
        this.#nombre = nombre
        this.#edad = edad
        this._profesion = profesion
    }
    get nombre(){
        return this.#nombre
    }
    set nombre(nuevoNombre){
        return this.#nombre = nuevoNombre
    }
    get edad(){
        return this.#edad
    }
    set edad(nuevaEdad){
        return this.#edad = nuevaEdad
    }
    get profesion(){
        return this._profesion
    }
    set profesion(nuevaProfesion){
        return this._profesion = nuevaProfesion
    }
    saludar(){
        return `Hola eres ${this.nombre}, tienes ${this.edad} años y eres ${this.profesion}`
    }
    despedirse(){
        return `Hasta luego ${this.nombre} que tengas un buen dia.`
    }
}
let persona1 = new Persona("Angel", 25, "Mecanico")
let persona2 = new Persona("Martin", 25, "Electricista")
let personas = [persona1, persona2]
document.writeln("<h5>Llamamos a la funcion saludar()</h5>")
personas.forEach(persona=>{
    document.writeln(`<p>${persona.saludar()}</p>`)
})
document.writeln("<h5>Llamamos a la funcion despedirse()</h5>")
personas.forEach(persona=>{
    document.writeln(`<p>${persona.despedirse()}</p>`)
})