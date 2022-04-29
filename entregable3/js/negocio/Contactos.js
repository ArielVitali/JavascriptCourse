


class Contactos{

    constructor(nombre, mail, telefono, domicilio, cumpleanos){
        this.nombre = nombre;
		this.mail = mail;
		this.telefono = telefono;
		this.domicilio = domicilio;
		this.cumpleaños = cumpleanos;
    }

    modificarContacto(mail, telefono, domicilio, cumpleanos) {
        this.mail = mail;
		this.telefono = telefono;
		this.domicilio = domicilio;
		this.cumpleaños = cumpleanos;
    }
}