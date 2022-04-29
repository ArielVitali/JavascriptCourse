
const nombre = document.querySelector('.nombre');
const telefono = document.querySelector('.telefono');
const domicilio = document.querySelector('.domicilio');
const cumpleanos = document.querySelector('.cumpleanos');
const btnAgregarContacto = document.querySelector('.btn-agregar-contacto');
const listadoContactos = document.querySelector('.listado-contactos')

const db = window.localStorage;


btnAgregarContacto.onclick = () => {
    if (nombre.value != "" && telefono.value != "" && domicilio.value != "" && cumpleanos.value != ""){
        let contacto = {
            id: Math.random(1,100),
            nombre: nombre.value,
            telefono: telefono.value,
            domicilio: domicilio.value,
            cumpleanos: cumpleanos.value,
        }
        guradarContacto(db, contacto)
    }
}
cargarContactos(db, listadoContactos)





