function mostrar()
{

var clave = prompt("Ingrese la clave.");
var contador = 0;

while (clave != "utn750") {
    contador++;
    if (contador == 3 ) {
        break;
    }
    
    clave = prompt ("Error, reingrese su clave");

    clave = clave.toLowerCase();
}


}//FIN DE LA FUNCIÓN
// != (es distinto a: )
