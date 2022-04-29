

import {Contactos, Eventos} from "../negocio";


//constructor
class Agenda{
    constructor(propietario, domicilio, mail, telefono){
        this.propietario = propietario;
        this.domicilio = domicilio;
        this.mail = mail;
        this.telefono = telefono;
        const contactos = [];
        const eventos = [];
    }
}


/* METODOS DE NEGOCIO */

//contacto

function buscarContacto(nombre){
    for (const contacto of contactos){
        if (contacto.nombre == nombre){
            return contacto;
        }
    }
}

function crearContactoNuevo(nombre, mail, telefono, domicilio, cumpleanos){
    const contacto = buscarContacto(nombre);
    if (contacto == null){
        contacto = new Contactos(nombre, mail, telefono, domicilio, cumpleanos);
        Agenda.contactos.push(contacto);
    } else {
        prompt("Contacto ya se encuentra creado")
    }
}

function modificarContacto(nombre, mail, telefono, domicilio, cumpleanos){
    const contacto = buscarContacto(nombre);
    if (contacto != null){
        contacto.modificarContacto(mail, telefono, domicilio, cumpleanos);
    } else {
        prompt("No se puede modificar un usuario inexistente")
    }
}

function eliminarContacto(nombre){
    const contacto = buscarContacto(nombre);
    if (contacto != null){
        Agenda.contactos = Agenda.contactos.filter((el) => el.nombre.includes(nombre));
    }

}


//evento

function buscarEvento(){
    for (const evento of eventos){ // manejar mejor esto 
        if (evento.fecha == fecha){
            return evento;
        }
    }
}

function crearEventoNuevo(fecha, horario, lugar, descripcion, contacto){
    const evento = buscarEvento(fecha);
    if (evento == null){
        evento = new Eventos(fecha, horario, lugar, descripcion, contacto);
        eventos.push(evento);
    } else {
        prompt("Contacto ya se encuentra creado")
    }
}

function modificarEvento(fecha, horario, lugar, descripcion, contacto){
    const evento = buscarEvento(fecha);
    if (evento != null){
        evento.modificarEvento(fecha, horario, lugar, descripcion, contacto);
    } else {
        prompt("No se puede modificar un usuario inexistente")
    }
}

function eliminarEvento(fecha){
    const evento = buscarContacto(fecha);
    if (evento != null){
        Agenda.eventos = Agenda.eventos.filter((el) => el.fecha.includes(fecha));
    }
}


/* PROGRAMA PRINCIPAL | METODOS DE NEGOCIO */

let crearAgenda = prompt("Ingrese el nombre de su Agenda : ");
// falta la parte de los PROMPT y ALERT con el usuario


