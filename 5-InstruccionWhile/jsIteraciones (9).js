function mostrar()
{

	var contador=0;
	// declarar variables debajo:
	var numero;
	var min;
	var max;
	var primeraVez = true;
	
	var respuesta = true;

	while(respuesta)
	{
		numero = prompt ("Ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero)) {
			numero = prompt ("Error, ingrese un numero");
			numero = parseInt(numero);
		}

		if (primeraVez) {
			primeraVez = false;

			max = numero;
			min = numero;
		} else {
			if (numero > max) {
				max = numero;
			}

			if (numero < min) {
				min = numero;
			}
		}



		respuesta = confirm("Desea continuar?");
		
	
	}




}//completo.