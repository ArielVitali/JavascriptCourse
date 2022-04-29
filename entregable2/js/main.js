







function calcularTotal(buzo_seleccionado,cantidad_seleccionada){
    switch (buzo_seleccionado){
        case 1:
            return buzo_uno * cantidad_seleccionada;
        case 2:
            return buzo_dos * cantidad_seleccionada;
        case 3:
            return buzo_tres * cantidad_seleccionada;
        case 4:
            return buzo_cuatro * cantidad_seleccionada;
        case 5:
            return buzo_cinco * cantidad_seleccionada;
        case 6:
            return buzo_seis * cantidad_seleccionada;
        case 7:
            return buzo_siete * cantidad_seleccionada;
        case 8:
            return buzo_ocho * cantidad_seleccionada; 
    }
}


//programa principal

const buzo_uno = 500;
const buzo_dos = 600;
const buzo_tres = 700;
const buzo_cuatro = 800;
const buzo_cinco = 900;
const buzo_seis = 1000;
const buzo_siete = 2000;
const buzo_ocho = 3000;

let buzo_seleccionado = prompt("Seleccione un buzo del 1 al 8 o ESC : ");
let cantidad_seleccionada = prompt("Ingrese cantidad de prendas o ESC : ");
let resultado;

if(buzo_seleccionado!= "ESC" && cantidad_seleccionada!="ESC"){
    resultado = calcularTotal(parseInt(buzo_seleccionado),parseInt(cantidad_seleccionada));
    alert("El total de su compra es:"+" $"+resultado);
}

