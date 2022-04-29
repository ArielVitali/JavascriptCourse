

const guradarContacto = (db, contacto) =>{
    db.setItem(contacto.id, JSON.stringify(contacto)) //stringfy me pasa un tipo Object a String
    //para recuperar el objeto debo parsearlo con funcion JSON
    window.location.href = '../entregable4/contactos.html'
    
}


const cargarContactos = (db, parentNode) =>{
    let claves = Object.keys(db);
    for (clave of claves){
        console.log(clave);
        let contacto = JSON.parse(db.getItem(clave));
        crearContacto(parentNode, contacto, db)
    }
}

const crearContacto = (parentNode, contacto, db) => {

    let divContacto = document.createElement('div');
    let nombreContacto = document.createElement('h3');
    let telefonoContacto = document.createElement('p');
    let domicilioContacto = document.createElement('p');
    let cumpleanosContacto = document.createElement('p');
    let iconoBorrar = document.createElement('span');

    nombreContacto.innerHTML = contacto.nombre;
    telefonoContacto.innerHTML = contacto.telefono;
    domicilioContacto.innerHTML = contacto.domicilio;
    cumpleanosContacto.innerHTML = contacto.cumpleanos;
    iconoBorrar.innerHTML = 'delete_forever';

    divContacto.classList.add('contacto');
    iconoBorrar.classList.add('material-icons', 'icono');

    iconoBorrar.onclick = () =>{
        db.removeItem(contacto.id);
        window.location.href = '../entregable4/contactos.html'
    }

    divContacto.appendChild(nombreContacto);
    divContacto.appendChild(telefonoContacto);
    divContacto.appendChild(domicilioContacto);
    divContacto.appendChild(cumpleanosContacto);
    divContacto.appendChild(iconoBorrar);

    parentNode.appendChild(divContacto);

}