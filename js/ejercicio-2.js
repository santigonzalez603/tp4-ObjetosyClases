const cuenta = {
    titular: "Alex",
    saldo: 0,

    ingresar: function(cantidad){
        this.saldo += cantidad
    },
    extraer: function(cantidad){
        this.saldo -= cantidad
    },
    informar: function(){
        return `El saldo de la cuenta ${this.titular} es: $${this.saldo}` 
    }
};
document.writeln('<h5>Propiedades del objeto "cuenta" creada:</h5>');
document.writeln('<ul>');
document.writeln(`<li>El titular de la cuenta: ${cuenta.titular}</li>`);
document.writeln(`<li>Saldo disponible en la cuenta: ${cuenta.saldo}</li>`);
document.writeln('</ul>');
document.writeln('<h5>Uso de los método del objeto "cuenta":</h5>');
cuenta.ingresar(parseFloat(prompt(`Ingrese la cantidad de dinero para ingresar en la cuenta de ${cuenta.titular}`)));
document.writeln(`<p>${cuenta.informar()}</p>`);
cuenta.extraer(parseFloat(prompt(`Ingrese la cantidad de dinero para extraar de la cuenta ${cuenta.titular}`)))
document.writeln(`${cuenta.informar()}`)
document.writeln('<ul>');
document.writeln(`<li>Titular de la cuenta: ${cuenta.titular}</li>`);
document.writeln(`<li>Saldo disponible en la cuenta: ${cuenta.saldo}</li>`);
document.writeln('</ul>');