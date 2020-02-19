function mostrar()
{

	var contador = 0;
	//declarar contadores y variables
	
	var respuesta = true;
	var sumaNegativos = 0;
	var sumaPositivos = 0;

	while (isNaN(numero)) {
		numero = prompt ("Error, ingrese un numero valido.");
		numero = parseInt(numero);
	}

	if (numero > 0) {
		// punto 2
		sumaPositivos += numero;
		// punto 3
		contadorPositivos++;
	} else if (numero < 0) {
		// punto 1
		sumaNegativos += numero;
	}




}//FIN DE LA FUNCIÓN