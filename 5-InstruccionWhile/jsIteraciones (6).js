function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while (contador < 5) {
		numero = prompt ("Ingrese numero");
		numero = parseInt(numero);

		while (isNaN(numero)) {
			numero = prompt("Ingrese un numero valido");
			numero = parseInt(numero);
		}
		contador++;
		acumulador += numero;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;
}