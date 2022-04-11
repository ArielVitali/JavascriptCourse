





// programa principal
let resultado;
let entrada = prompt("Ingrese un numero o ESC para terminar: ");
resultado = entrada
while(entrada != "ESC"){
    resultado = entrada;
    entrada = prompt("Ingrese un numero o ESC para terminar: ");
}

switch(resultado){
    case "1":
        alert("tomate");
        break;
    case "2":
        alert("papa");
        break;
    case "3":
        alert("carne");
        break;
    case "4":
        alert("pollo");
        break;
    case "ESC":
        alert("No se ingresaron numeros")
        break;
    default:
        alert("Ingresaste " + resultado);
        break;

}
