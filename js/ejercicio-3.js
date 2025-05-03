class Rectangulo{
    #ancho
    #alto
    constructor(ancho, alto){
        this.#ancho
        this.#alto
    }
    get ancho(){
        return this.#ancho
    }
    set ancho(nuevoAncho){
        if(nuevoAncho > 0 && !isNaN(nuevoAncho)){
            this.#ancho = nuevoAncho
        }
    }
    get alto(){
        return this.#alto
    }
    set alto(nuevoAlto){
        if(nuevoAlto > 0 && !isNaN(nuevoAlto)){
            this.#alto = nuevoAlto
        }
    }
    modificarAncho(){
        this.ancho = parseFloat(prompt("Ingrese el ancho"))
    }
    modificarAlto(){
        this.alto = parseFloat(prompt("Ingrese el alto"))
    }
    calcularPerimetro(){
        return  2* (this.alto + this.alto)
    }
    calcularArea(){
        return this.alto * this.ancho
    }
    mostrarPropiedades(){
        document.writeln('<ul>')
        document.writeln(`<li>Ancho del rectangulo: ${this.ancho}</li>`)
        document.writeln(`<li>Alto del rectangulo: ${this.alto}</li>`)
        document.writeln('</ul>')
    }
}
let rectangulo1 = new Rectangulo(0,0);
document.writeln('<h5>Propiedades iniciales del objeto "rectangulo1" fueron creadas a partir de la clase "Rectangulo":</h5>')
rectangulo1.mostrarPropiedades()
document.writeln('<h5>Uso de los metodos del objeto "rectangulo1":</h5>')
rectangulo1.modificarAlto()
rectangulo1.modificarAncho()
rectangulo1.mostrarPropiedades()
document.writeln(`El perimetro del rectangulo es: ${rectangulo1.calcularPerimetro()}`)
document.writeln(`El ancho del rectangulo es: ${rectangulo1.calcularArea()}`)