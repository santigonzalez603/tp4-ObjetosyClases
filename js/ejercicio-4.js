class Producto{
    #codigo
    #precio
    constructor(codigo, nombre, precio){
        this.#codigo
        this._nombre
        this.#precio
    }
    get codigo(){
        return this.#codigo
    }
    set codigo(nuevoCodigo){
        if(nuevoCodigo.length > 0){
            this.#codigo = nuevoCodigo
        }
    }
    get nombre(){
        return this._nombre
    }
    set nombre(nuevoNombre){
        if(nuevoNombre.length > 0){
            this._nombre = nuevoNombre
        }
    }
    get producto(){
        return this.#precio
    }
    set producto(nuevoPrecio){
        if(nuevoPrecio > 0 && !isNaN(nuevoPrecio)){
            this.#precio = nuevoPrecio
        }
    }
    pasarDatos(){
        this.codigo = prompt("Ingrese el codigo del producto")
        this.nombre = prompt("Ingrese el nombre del producto")
        this.precio = parseFloat(prompt("Ingrese el precio del producto"))
    }
    verProducto(){
        return `Codigo: ${this.codigo} - Nombre: ${this.nombre} - Precio: ${this.precio}`
    }
    verProductoComoLista(){
        document.writeln('<ul>')
        document.writeln(`<li>Codigo del producto: ${this.codigo}</li>`)
        document.writeln(`<li>Nombre del producto: ${this.nombre}</li>`)
        document.writeln(`<li>Precio del producto: ${this.precio}</li>`)
        document.writeln('</ul>')
    }
}
alert("A continuacion se le pedirá la cantidad de productos a ingresar. El enunciado dice que se deben añadir 3 nuevos productos")
let = grupoProducto = []
cantidadProducto = parseInt(prompt("Cantidad de productos que deseas agregar"))
for(let i=0; i < cantidadProducto; i++){
    let producto = new Producto()
    producto.pasarDatos()
    cantidadProducto.push(producto)
}
grupoProducto.array.forEach(element => {
    document.writeln(`<h5>Producto: ${producto.nombre}</h5>`)
    producto.verProductoComoLista()
});