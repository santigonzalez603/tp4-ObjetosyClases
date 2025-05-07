class Animal{
    constructor(nombre, edad){
        this._nombre = nombre
        this._edad = edad
    }
    emitirSonido(){
        return `${this.nombre} hace`
    }
}
class Perro extends Animal{
    emitirSonido(){
        return super.emitirSonido() + " " + "Guau Guau!! 🐕"
    }
}
class Gato extends Animal{
    emitirSonido(){
        return super.emitirSonido() + " " + "Meowww!! 🐈"
    }
}
let perro = new Perro("Mora", 6)
let gato = new Gato("Tomas", 7)
let animales = [perro, gato]
document.writeln("<h5>Llamamos al método de los animales emitirSonido()</h5>")
animales.forEach(animal=>{
    document.writeln(`<p>${animal.emitirSonido()}</p>`)
})