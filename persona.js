class Persona {

    constructor(pNombre, pApellidos, pDireccion) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.direccion = pDireccion;
    }

    mostrar() {
        return `Hola me llamo ${this.nombre} ${this.apellidos} y vivo en ${this.direccion}`;
    }

}

const pers = new Persona('Mario', 'Giron', 'C/ Gran Vía 23');
console.log(pers.nombre);
console.log(pers.mostrar());