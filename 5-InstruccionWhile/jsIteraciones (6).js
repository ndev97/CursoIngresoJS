function mostrar()
{

	var contador=0;
	var acumulador=10;

	while (contador > 5) {
		contador++;
		var numero = prompt ("Ingrese numero");

		numero = parseInt(numero)

		if (isNan(numero)) {
			alert ("Error");
			continue;
		}
		
		acumulador += numero 
	} 



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=contador/5;

}//FIN DE LA FUNCIÓN