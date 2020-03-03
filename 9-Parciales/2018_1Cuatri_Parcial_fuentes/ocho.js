function mostrar()
{
    var respuesta;
    var letra;
    var numero;
    var numeroMaximo;
    var numeroMinimo;
    var letraMinima;
    var letraMaxima;
    var primeraVez = true;
    var promedioPositivos;
    var acumuladorNegativos;
    var acumuladorPositivos;
 
    do {
        numero = prompt("Ingrese un numero");
        numero = parseInt(numero);
        while (isNaN(numero) || numero < -100 || numero > 100) {
            numero = prompt("Ingrese un numero valido");
            numero = parseInt(numero);
        }
        letra = prompt("Ingrese una letra");
        while(!isNaN(letra)) {
            letra = prompt("Ingrese una letra valida.");
        }

        if (numero % 2 == 0) {
            cantidadPares++;
        } else if (numero != 0) {
            cantidadImpares++;
        }

        if (numero > 0) {
            acumuladorPositivos += numero;
        }

        if (primeraVez) {
            primeraVez = false;
            numeroMaximo = numero;
            numeroMinimo = numero;
            letraMaxima = letra;
            letraMinima = letra;
        }

        respuesta = confirm("Desea continuar?");
    } while(respuesta)

    document.write("Cantidad de pares " + cantidadPares + "<br>");
    document.write("Cantidad de impares " + cantidadPares + "<br>");
    document.write("Cantidad de ceros " + cantidadPares + "<br>");
    
    if (contadorPositivos == 0) {
        promedio = 0;
    } else {
        promedio = acumuladorPositivos / contadorPositivos;
    }
    document.write("Promedio de positivos " + promedioPositivos + "<br>");
    document.write("Acumulador negativos " + acumuladorNegativos + "<br>");
    document.write("Numero maximo " + numeroMaximo + "<br>");
    document.write("Numero minimo " + numeroMinimo + "<br>");
}
