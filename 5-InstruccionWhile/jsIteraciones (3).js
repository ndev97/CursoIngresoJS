function mostrar()
/*{
    var clave = prompt("Ingrese la clave");

    while (clave != "utn750") {
        clave = prompt("Reintente la clave");
    }
    alert("Bienvenido");
}*/

{
    var clave = prompt("Ingrese la clave");
    var contador = 0;

    while (clave != "utn750") {
        contador++;
        clave = prompt("Reintente la clave");

        while (contador < 3) {
            alert("Demasiador intentos, recargue la pagina para volver a intentar.");
        }        
    }

    alert("BIENVENIDO");
}