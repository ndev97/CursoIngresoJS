function mostrar()
{
    var letra;
    var numero;
    var respuesta = true;
    var cantidadPares = 0;
    var cantidadImpares = 0;
    var sumaPositivos = 0;
    var cantidadPositivos = 0;
    var cantidadNegativos = 0;
    var cantidadCeros = 0;
    var promedioPositivos;
    var sumaNegativos;
    var contador = 0;
    var letraMax;
    var numeroMax;
    var letraMin;
    var numeroMin;

    while (respuesta) {
        numero = prompt("Ingrese un numero entre -100 y 100:");
        numero = parseInt(numero);
        
        while (isNaN(numero) || (numero < -100 || numero > 100)) {
            numero = prompt("Ingrese un numero valido entre -100 y 100.");
            numero= parseInt(numero);
        }
        letra = prompt("Ingrese una letra:");
        while(!isNaN(letra)) {
            letra = prompt("Ingrese una letra valida.");
        }
        
        if(numero % 2 == 0) {
            cantidadPares++;
        } else {
            cantidadImpares++;
        }

        if(numero > 0) {
            cantidadPositivos++;
        } else if (numero < 0) {
            cantidadNegativos++;
        } else {
            cantidadCeros++;
        }

        if(numero > 0) {
            sumaPositivos += numero;
        }

        if(numero < 0) {
            sumaNegativos -= numero;
        }

        if(contador == 0 || (numero > numeroMax)) {
            numeroMax = numero;
            letraMax = letra;
        }

        if(contador == 0 || (numero < numeroMin)) {
            numeroMin = numero;
            letraMin = letra;
        }
        
        contador++;
        respuesta = confirm("Quiere seguir ingresando numeros?");
    }

    promedioPositivos = sumaPositivos / cantidadPositivos;
    
    document.write("A) La cantidad de numeros pares es " + cantidadPares + "<br>");
    document.write("B) La cantidad de numeros impares es " + cantidadImpares + "<br>");
    document.write("C) La cantidad de Ceros es " + cantidadCeros + "<br>");
    document.write("D) El promedio de todos los numeros positivos es " + promedioPositivos + "<br>");
    document.write("E) La suma de todos los numeros negativos es " + sumaNegativos + "<br>");
    document.write("F) El numero y la letra del maximo es " + numeroMax + " " + letraMax + "<br>");
    document.write("   El numero y la letra minima es " + numeroMin + " " + letraMin);
}


/*{
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
        while (isNaN(numero) || (numero < -100 || numero > 100)) {
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
        console.log(numero);
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
}*/
