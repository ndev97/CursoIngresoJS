function mostrar()
{

	var contador=0;
	var acumulador=0;

	while (contador < 5) {
		var numero = prompt ("Ingrese numero");

		numero = parseInt(numero);

	while (isNaN(numero)) {
		numero = prompt("Error, ingrese un numero valido.");

		numero = parseInt(numero);
	}
	contador++;

	acumulador +- numero;
	



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=contador/5;
}

}