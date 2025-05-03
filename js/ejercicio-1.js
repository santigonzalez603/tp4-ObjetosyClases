const auto = {
    color: "blanco",
    marca: "honda",
    modelo: "civic",
    encendido: false,

    encender: function (){
        this.encendido = true;
        return `El auto ${this.marca} ${this.modelo} esta encendido`;
    },
    apagar: function (){
        this.encendido = false;
        return `El auto ${this.marca} ${this.modelo} esta apagado`;
    },
};
document.writeln("<ul>")
document.writeln(`<li>Marca: ${auto.marca}</li>`)
document.writeln(`<li>Modelo: ${auto.modelo}</li>`)
document.writeln(`<li>Color: ${auto.color}</li>`)
document.writeln(`<li>Estado: ${auto.encendido === false ? "esta apagado": "esta encendido"}</li>`)
document.writeln('<li>Metodos del objeto "auto":</li>')
document.writeln(`<li>${auto.encender()}</li>`)
document.writeln(`<li>${auto.apagar()}</li>`)
document.writeln("</ul>")