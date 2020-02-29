function mostrar()
{
	var numero = prompt("Ingrese un numero entre 0 y 9");

	while(numero < 1 || numero > 10 || isNaN(numero)) {
		numero = prompt("Ingrese un numero valido");
		numero = parseInt(numero);
	}
	alert("Numero ingresado correctamente.");
	document.getElementById("Numero").value = numero

}//FIN DE LA FUNCIÓN