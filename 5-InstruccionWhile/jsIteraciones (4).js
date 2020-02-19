function mostrar()
{

var numero = 15;
var numero = prompt("Ingrese un número entre 0 y 10.");

	while (numero < 0 || numero > 9 || isNan(numero)) {
		numero = prompt("Ingrese un numero valido");

		numero = parseInt(numero);

		console.log(numero)
		console.log(isNaN(numero));
	}

}//FIN DE LA FUNCIÓN