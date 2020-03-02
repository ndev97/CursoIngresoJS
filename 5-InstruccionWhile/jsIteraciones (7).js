
function mostrar()
{
	var numero;
	var contador = 0;
	var acumulador = 0;
	var respuesta = true;
	
	while (respuesta) {
		numero = prompt ("ingrese un numero");
		numero = parseInt(numero);
		while (isNaN(numero)) {
			numero = prompt("Error, ingrese un numero valido");
			numero = parseInt(numero);
	}
	contador++;
	acumulador+=numero
	respuesta = confirm("Desea continuar?");

	}



document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador/contador;

}//completo.