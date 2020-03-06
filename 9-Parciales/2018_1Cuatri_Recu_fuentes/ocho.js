function mostrar()
{
    var letra;
    var numero;
    var respuesta = true;
    var contadorPares;
    var acumuladorPares;
    var acumuladorImpares;
    var 

    while(respuesta) {
        numero = prompt("Ingrese un numero entre -100 y 100");
        numero = parseInt(numero);
        while(isNaN(numero) && (numero < -100 || numero > 100)) {
            numero = prompt("Ingrese un numero valido");
            numero = parseInt(numero);
        }
        respuesta = confirm ("Desea continuar?");
    }

}
