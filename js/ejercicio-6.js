class Libro{
    constructor(isbn, titulo, autor, numPaginas){
        this._isbn = isbn
        this._titulo = titulo
        this._autor = autor
        this._numPaginas = numPaginas
    }
    get isbn(){
        return this._isbn
    }
    set isbn(nuevoISBN){
        if(nuevoISBN.length === 13 && nuevoISBN.length === 10){
            return this._isbn = nuevoISBN
        }
    }
    get titulo(){
        return this._titulo
    }
    set titulo(nuevoTitulo){
        return this._titulo = nuevoTitulo
    }
    get autor(){
        return this._autor
    }
    set titulo(nuevoAutor){
        return this._autor = nuevoAutor
    }
    get numPaginas(){
        return this._numPaginas
    }
    set numPaginas(nuevoNumPaginas){
        if(nuevoNumPaginas > 0 && isInteger(nuevoNumPaginas)){
            return this._numPaginas = nuevoNumPaginas
        }
    }
    mostrarLibro(){
        return `El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene ${this.numPaginas} páginas`
    }
}
const libro1 = new Libro(9789507883316, "Sobrenatural", "Joe Dispenza", 382)
const libro2 = new Libro(9789871138715, "Tus zonas erroneas", "Wayne W. Dier", 313)
let libros = [libro1,libro2]
document.writeln("<h5>Mostramos los datos de los libros definidos con la clase Libros:</h5>")
libros.forEach(libro =>{
    document.writeln(`<p>${libro.mostrarLibro()}</p>`)
})
document.writeln("<h5>Mostramos la cantidad de páginas de cadalibro</h5>")
libros.forEach(libro =>{
    document.writeln(`<p>${libro.titulo} tiene ${libro.numPaginas} páginas</p>`)
})
document.writeln("<h5>Mostramos cual libro tiene más páginas</h5>")
if(libro1.numPaginas > libro2.numPaginas){
    document.writeln(`<p>${libro1.titulo} tiene más páginas</p>`)
}
else if(libro1.numPaginas < libro2.numPaginas){
    document.writeln(`<p>${libro2.titulo} tiene más páginas</p>`)
}
else{
    document.writeln(`<p>${libro1.titulo} y ${libro2.titulo} tienen la misma cantidad de páginas</p>`)
}
