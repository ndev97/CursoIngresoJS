function mostrar()
{

	var contador = 0;
	//declarar contadores y variables
	
	var respuesta = true;
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contadorNegativos;
	var contadorPositivos;
	var contadorCeros;
	var contadorDePares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivos;
	var diferenciaNegativos;



	//while(respuesta) {
		//numero = prompt("Ingrese un numero");
		//numero = parseInt(numero);
	//}
	
	//while (isNaN(numero)) {
	//	numero = prompt ("Error, ingrese un numero valido.");
	//	numero = parseInt(numero);

	do {
		var numero = prompt ("Ingrese un numero");
		numero = parseInt(numero);
	} while (isNaN(numero));

	if (numero > 0) {
		// punto 2
		sumaPositivos += numero;
		// punto 3
		contadorPositivos++;
	} else if (numero < 0) {
		// punto 1
		sumaNegativos += numero;
	} else {
		// punto 5
		contadorCeros++;
	} if (numero < 0) {
		// punto 4
		sumaNegativos -= numero;
	}	

	respuesta = confirm ("Desea continuar?");

	}

	promedioPositivos = sumaPositivos / contadorPositivos;

	promedioNegativos = sumaNegativos / contadorNegativos;

	diferenciaPositivosYNegativos = sumaPositivos - sumaNegativos;

	document.write("Promedio de negativos " + promedioNegativos) "<br>"
	document.write("Promedio de positivos " + promedioPositivos) "<br>"
	document.write("Diferencia " + diferenciaPositivosYNegativos) "<br>"
 



}//FIN DE LA FUNCIÓN